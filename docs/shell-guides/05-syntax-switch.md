---
sidebar_position: 5
---

# 分支与循环

bash支持多种分支/判断/循环控制，这些结构使得我们对于逻辑的处理变得非常灵活，俗话说，写不好if/else的程序员不是好司机，下面一起操练起来。

## 分支
最常见的分支是`case`，语法示例如下：
```bash
#!/bin/bash

case $1 in
    a)
        echo "a"
        ;;
    b*)
        echo "starts with b"
        ;;
    c|d)
        echo "c"
        echo "or d"
        ;;
    *)
        echo "hello $1"
        ;;
esac
```
通过示例可以看到case语句作用就是通过匹配不同的模式来选择性执行不同的分支命令，模式匹配支持通配符，可以使用`|`来分隔多个匹配。

case语句最常用的场景是在脚本入口作为命令行参数的接收器，根据不同的参数执行对应操作。

## 判断
bash中使用`if`语句进行条件判断，根据`if`之后的条件返回值来选择下一步需要执行的代码块，这就是人们常说的`if else`了。但是由于少数经验不足的新手对于此结构掌握不是很好，容易滥用`if else`进行多层嵌套，如果没有很好缩进习惯的话会导致代码看上去就像一团麻。为了弄清楚`if else`的正确使用姿势，下面先看一下基本结构示例：
```bash
if [[ $min -lt 10 ]]; then
    echo "no no no"
elif [[ $min -lt 60 ]]; then
    echo "oh oh oh"
elif [[ $min -lt 120 ]]; then
    echo "yes yes yes"
else
    echo "oh my god"
fi
```
可以看到if支持多个分支判断，最后可以用else兜底。当然`elif`和`else`并不是必须的，但是`if` 和 `fi`不能少。下面再看另外一个示例：
```bash
if grep -q "keyword" /file; then
    echo "found it"
    return 0
else
    echo "nothing found"
    return 1
fi
```
上面例子中可以看到第一个if分支结束时使用了return进行返回，那么后面的`else`就显得特别多余，因此稍加改写变成如下：
```bash
if grep -q "keyword" /file; then
    echo "found it"
    return 0
fi
echo "nothing found"
return 1
```
这样会显得更加干净卫生。再看另外一个例子：
```bash
a_command &>>/dev/null
if [[ $? -eq 0 ]]; then
    do_one_thing
    do_another_thing
fi
```
通常对于这种根据某个命令的执行返回值来决定接下来要执行的内容可以改写成：
```bash
if a_command 2>>/dev/null; then
    do_something
fi
```
## 循环



