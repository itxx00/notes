---
sidebar_position: 5
---

# 分支与条件

bash支持多种分支、条件判断控制，这些结构使得我们对于逻辑的处理变得非常灵活，俗话说，写不好if/else的程序员不是好司机，下面一起操练起来。

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

## 条件判断

### 基本结构
bash中使用`if`语句进行条件判断，根据`if`之后的条件返回值来选择下一步需要执行的代码块，通常和各种测试语句连用，这就是人们常说的`if else`了。下面先看一下基本结构示例：
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
可以看到 `if` 支持多个分支判断，最后可以用 `else` 兜底。当然 `elif` 和 `else` 并不是必须的，但是 `if` 和  `fi` 不能少。

### 写出好看的结构
由于少数经验不足的新手对于此结构掌握不是很好，容易滥用`if else`进行多层嵌套，如果没有很好缩进习惯的话会导致代码看上去就像~~一坨屎~~ 一团麻。为了弄清楚`if else`的正确使用姿势下面看一个示例：
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
    do_another_thing
fi
```
再看第三个例子：
```bash
if [[ -f $file1 ]]; then
    echo "$file1 exists"
    if [[ -f $file2 ]]; then
        echo "$file2 exists"
        do_something
    else
        echo "$file2 not found"
        return 1
    fi
else
    echo "$file1 not found"
    return 1
fi
```
以上例子中使用了两层嵌套if else，当判断两个条件都成立才执行指定操作，可以简单改写成如下：
```bash
if ! [[ -f $file1 ]]; then
    echo "$file1 not found"
    return 1
fi
if ! [[ -f $file2 ]]; then
    echo "$file2 not found"
    return 1
fi
do_something
```
另外单个分支的if结构可以通过代码块写成下面这种变体：
```bash
a_command && {
    do_something
    do_another_thing
}
```

需要注意的是有少数同学喜欢将`if else`写成`&& ||`的结构，其实两者是不等价的，比如：
```bash
command1 && command2 || command3
```
如果是想表达当command1成功就执行command2，不然就执行command3的话那么就错了，因为当command2失败也会触发command3，而使用`if else`才能准确表达这层含义：
```bash
if command1; then command2; else command3 fi;
```
以上仅仅是一些简单的示例演示一些让代码更可读的基本方法，实际情况往往要更加复杂，例如多数场景下可以通过拆分成函数等方法对代码结构进行更有条理的组织，而不是全程流水账式的判断和分支。总之基本原则是能不嵌套就不嵌套，能少分支就少分支，能早返回就早返回。



