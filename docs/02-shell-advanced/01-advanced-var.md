---
sidebar_position: 1
---
# 变量进阶
在基础篇中我们掌握了如何定义一个变量，以及如何引用他们，而关于变量还有更多的门门道道，有很多知识是我们在日常工作中必不可少的，下面跟着老司机的节奏操练起来。bash中有一类变量是预先就存在的或者是被保留的，姑且把这类变量统称为内置变量，内置变量主要包括环境变量/位置变量/特殊变量等，下面我们逐一研究。

## 环境变量
Environment variables or ENVs basically define the behavior of the environment. They can affect the processes ongoing or the programs that are executed in the environment.  

Scope of an environment variable
Scope of any variable is the region from which it can be accessed or over which it is defined. An environment variable in Linux can have global or local scope.  

Global

A globally scoped ENV that is defined in a terminal can be accessed from anywhere in that particular environment which exists in the terminal. That means it can be used in all kind of scripts, programs or processes running in the environment bound by that terminal. 

Local

A locally scoped ENV that is defined in a terminal cannot be accessed by any program or process running in the terminal. It can only be accessed by the terminal( in which it was defined) itself. 

## 位置变量
$0

## 特殊变量
```
$?
$#
$*
$!
$$
```

## 变量截取

## 变量赋值

## 进制转换
