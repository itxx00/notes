---
layout: post
title: "influxQL常用语句整理"
authors: itxx00
description: "年纪大了记性不好"
categories: [shell]
tags: [bash, ]
---


## db
```
show databases
use db1
show retention policies
create database db2 with duration 30d replication 2
```

## retention
```
alter retention policy default on db1 duration 168h default
show retention policies
```


## measurements
```
use db1
show measurements
show measurements with measurement =~ /cpu/

```

## tag
```
show tag keys from cpu
show tag values from cpu with key=cputype
```

## field
```
show field keys from cpu

```
