---
sidebar_position: 2
---
# 文件描述符
在[输入输出与管道](../01-shell-basic/07-syntax-io.md)中我提到进程打开文件进行读写操作会产生文件描述符（file descriptor，简称fd），可以简化地理解为，当一个进程将某个文件打开时，内核会把这个文件打开的信息记录到一个表里面，然后返回给进程一个指向这个文件的数字，这个数字就是文件描述符。在bash中也有办法对文件描述符进行读写操作。

## 打开文件描述符
可以通过下面的方式打开一个文件描述符并分配指定的文件描述符：
```bash
# 只读模式打开
exec 3</tmp/f1
# 只写模式打开
exec 4>/tmp/f1
# 读写模式
exec 5<>/tmp/f1
```
可以通过观察当前进程打开的文件描述符权限看到不同模式的差异：

![open file descriptor](./img/fd1.png)

需要注意的是自定义文件描述符的范围是3到ulimit -n之间的值，因为0 1 2 前面有提到过是系统保留作为标准输入、输出和错误的文件描述符。当然也并不是说就不能碰这三个，如果强制覆盖这三个bash进程已经打开的文件描述符并指向其他文件，则会对输入输出造成影响。

## 从文件描述符读取
通过下面的方式可以从文件描述符读取内容：
```bash
exec 3</etc/passwd
# 一次性全部读出
cat <&3
或者逐行读出
exec 3</etc/passwd
while read -u 3 line; do
    echo $line
done

```

## 向文件描述符写入
写入操作如下：
```bash
exec 3>/tmp/f1
# 标准输出写入3号fd
date >&3
# 标准错误写入3号fd
data 2>&3
```
看到这里就能get到，常用于标准错误重定向的 `2>&1` 就是对文件描述符的操作。 

## 关闭文件描述符
可以通过下面的方式关闭一个打开的文件描述符：
```bash
exec 3<&-
# 或者
exec 3>&-
```

## 文件描述符使用示例
通过文件描述符来操作文件对比常用的各种命令直接操作文件最大的不同是文件描述符一旦产生则文件就是一直处于打开状态的，如果需要来来回回对一个文件进行操作又想避免重复打开关闭的开销，就可以通过文件描述符来操作，下面看一个简单的示例：
```bash
exec 3<>/dev/tcp/baidu.com/80
echo -e "GET / HTTP/1.1\r\nHost: baidu.com\r\nConnection: close\r\n\r\n" >&3
cat <&3
```
示例中通过文件描述符打开了一个到baidu.com主机tcp 80端口的文件，此时就建立了一个tcp链接，紧接着向这个已经打开的文件描述符写入了一个HTTP请求的明文即是发送请求，然后通过读取文件描述符取得对应的响应内容，不出意外的话上面的请求将会得到类似下面的输出：
```html
HTTP/1.1 200 OK
Date: Mon, 03 Oct 2022 16:11:24 GMT
Server: Apache
Last-Modified: Tue, 12 Jan 2010 13:48:00 GMT
Content-Length: 81
Cache-Control: max-age=86400
Expires: Tue, 04 Oct 2022 16:11:24 GMT
Connection: Close
Content-Type: text/html

<html>
<meta http-equiv="refresh" content="0;url=http://www.baidu.com/">
</html>
```