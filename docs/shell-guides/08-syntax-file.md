---
sidebar_position: 8
---

# 文件

本节开始介绍文件的读写操作。在linux里，几乎所有东西都被设计成文件系统，我们能在用户空间通过文件接口的方式来操作进程，调整内核，操作设备，发送网络请求等。

## 文件分类
linux系统中文件可以分为字符设备(character)、块设备(block)、目录(directory)、软链接(symbolic link)、有名管道(named pipe)、socket文件、普通文件(regular)等，其中普通文件又可以大致分为可执行的二进制、动态库、压缩文件、文本文件、空文件、各种特定格式数据文件等。

可以使用`file`命令查看文件的类型，也可以使用bash内置的测试或者`test`命令来判断文件类型。
```bash
file /bin/bash
[[ -f /bin/bash ]]
```

## 创建删除文件
创建和删除文件方法很多，不同的特殊文件有不同的创建方式，后面会有内容逐步介绍，这里先看最简单的创建删除普通文件的方式：
```bash
# 创建
touch file1
# 或者
>file1
# 删除
rm file1
# 或者
unlink file1
```

## 读文件
要从文件里面读取内容方法也很多，这里还是从简单的开始入手：
```bash
# 读取整个文件
cat /etc/passwd
# 或者
echo "$(</etc/passwd)"
# 读第一行
head -1 /etc/passwd
# 读第一个字符
head -c1 /etc/passwd
# 读最后一行
tail -1 /etc/passwd
# 读最后一个字符
tail -c1 /etc/passwd
``

## 写文件
写入文件可以分交互式和非交互式的，交互式写入最常见的方式是通过编辑器如vi等打开一个文件，输入内容然后保存。非交互式的写入最常见的是将标准输出重定向到文件。例如：
```bash
# 覆盖写
echo "hi" >file1
# 追加写
echo "hi" >>file1

# 使用tee写入
echo "hi" | tee file1
# 使用dd写入
dd of=file1 <<<"hi"
```

## 


