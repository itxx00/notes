---
layout: post
title: "mac上使用docker交叉静态编译jq和fio"
authors: itxx00
description: "描述"
categories: [shell]
tags: [bash, ]
---


## 思路
为了得到静态编译的jq和fio程序二进制,同时又需要x86_64和aarch64的版本,可以利用docker的buildx实现交叉编译

## 步骤

编译fio

```bash
mkdir fio && cd fio
vi Dockerfile
```

Dockerfile 如下
```
FROM ubuntu as build
WORKDIR /opt
ARG VER=fio-3.33
RUN if [  -e /etc/apt/sources.list ];then sed -ri 's/[a-zA-Z0-9.]+(debian.org|ubuntu.com)/mirrors.volces.com/g' /etc/apt/sources.list; fi && \
    export DEBIAN_FRONTEND=noninteractive && \
    apt-get update && \
    apt-get install -y git gcc make cmake libaio1 libaio-dev zlib1g zlib1g-dev
RUN git clone https://github.com/axboe/fio.git && \
    cd fio  && \
    git checkout ${VER}
RUN cd fio  && \
    ./configure --build-static
RUN cd fio && make && make install  && \
    strip `which fio` && cp `which fio` /fio-$(dpkg --print-architecture)

FROM scratch AS bin
COPY --from=build /fio-* /
```

执行编译
```bash
docker buildx build . --platform linux/amd64 --target bin --output .
docker buildx build . --platform linux/arm64 --target bin --output .
```
编译成功会在当前目录得到可执行程序fio-amd64和fio-arm64两个文件.


jq编译步骤类似,dockerfile如下:
```
FROM ubuntu as build
WORKDIR /opt
ARG VER=jq-1.6
RUN if [  -e /etc/apt/sources.list ];then sed -ri 's/[a-zA-Z0-9.]+(debian.org|ubuntu.com)/mirrors.volces.com/g' /etc/apt/sources.list; fi && \
    export DEBIAN_FRONTEND=noninteractive && \
    apt-get update && \
    apt-get install -y build-essential libtool git gcc make cmake autotools-dev autoconf
RUN git clone https://github.com/stedolan/jq.git && \
    cd jq  && \
    git checkout ${VER} && git submodule update --init
RUN cd jq  && \
    autoreconf -fi && \
    ./configure --disable-maintainer-mode --disable-valgrind --with-oniguruma=builtin --enable-all-static --prefix=/usr/local
RUN cd jq && LDFLAGS=-all-static make -j4 && make install  && \
    strip /usr/local/bin/jq && cp /usr/local/bin/jq /jq-$(dpkg --print-architecture)

FROM scratch AS bin
COPY --from=build /jq-* /
```
