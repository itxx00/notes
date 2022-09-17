---
sidebar_position: 1
---
# 变量进阶
在基础篇中我们掌握了如何定义一个变量，以及如何引用他们，而关于变量还有更多的门门道道，有很多知识是我们在日常工作中必不可少的，下面跟着老司机的节奏操练起来。bash中有一类变量是预先就存在的或者是被保留的，姑且把这类变量统称为内置变量，内置变量主要包括环境变量，位置变量和其他特殊变量等，下面我们逐一研究。

## 环境变量
环境变量用于控制/显示进程的运行环境，改变环境状态，环境变量分全局和局部，全局变量在任何地方都能生效，局部变量只在其运行进程中生效。可以使用`printenv`命令查看当前生效的环境变量，要增加/修改全局环境变量通常可以在/etc/profile.d目录中通过单独的文件定义，修改用户的局部变量可以在home目录下.bash_profile和.bashrc中操作，这些文件的具体差别和加载时机可以参考[bashrc与profile加载顺序](../03-shell-extras/bash-profile-order.md) 。

常见的环境变量有`$PATH $USER $UID $HOSTNAME $LANG` 等。


## 位置变量
或者叫位置参数，用来在命令行或脚本中向执行的命令/函数传递参数。例如`$0`代表被执行的脚本名，如果是软连接则为软链接的文件名而非实际文件名，`$1`代表第一个位置传递的参数，以此类推。下面看示例：
```bash
#!/bin/bash
proc=$(basename $0)
if [[ $proc = abc ]]; then
	echo "$1$2$3$4$5"
elif [[ $proc = cba ]]; then
	echo "$5$4$3$2$1"
fi
```
执行时通过位置传递参数：

![pos](./img/pos.png)

从输出中我们可以直观的感受到位置参数的使用，相同的脚本软链接到另外一个名字，通过区分`$0`的变化来执行不同的内容。

## 特殊变量
bash中还有一些特殊的变量，常用的特殊变量见下表：

| 变量 | 含义 | 说明 |
| --- | --- | --- |
| $? | 返回值 | 最后一个命令的返回值,0表示正常退出 |
| $# | 参数个数 | 获取传入脚本或函数的位置参数个数 |
| $* | 全部位置参数 | "$*"为所有参数的整体不能被展开 |
| $@ | 全部位置参数 | "$@"为所有参数可以被展开 |
| $! | 后台进程pid | 获取最后一个后台进程的pid |
| $$ | 当前进程pid | 获取当前进程的pid |
| $RANDOM | 随机数字 | 输出一个随机数 |
| $FUNCNAME | 函数名 | 输出当前函数的名称 |
| $LINENO | 行号 | 输出当前所在行的行号 |


## 变量默认值
有时候一个变量是通过其他参数赋值，当不能被赋值的时候想要设置一个默认值，例如：
```bash
var1="default"
[[ -n $1 ]] && var1="$1"
```
可以简化成下面这样：
```
var1=${1:-"default"}
```
另外一种情况是变量可能是在另外一个地方被赋值，当没有被赋值的时候需要给这变量设置默认值，例如：
```bash
[[ -n $var2 ]] || var2="default"
```
可以简化成下面这样：
```bash
var2=${var2:-default}
# 或者
: ${var2:=default}
```
这里需要注意`k=${v:-x}` 和 `k=${v:=x}` 两种写法的区别，前者赋值k的同时变量v的值不变，后者赋值k的同时如果变量v为空也会被赋值。

还有一种情况是需要实现当变量不存在时，就输出异常信息，不再继续执行，例如：
```bash
[[ -n $var3 ]] || {
	echo "var3 not defined" >&2
	return 1
}
echo $var3
```
对应的可以写成：
```bash
echo ${var3:?var3 not defined}
```

## 变量长度
要获取一个变量值的长度，可以这样：
```bash
var1="012345"
echo ${#var1}
# 如果是数组，获取数组元素个数需要写成：
echo ${#var1[@]}
# 获取位置参数个数
echo ${#@}
```

## 变量替换



## 变量截取
```
${var#Pattern}, ${var##Pattern}
```
从变量 $var 的开头删除最短或最长匹配 $Pattern 的子串. 

```
${var%Pattern}, ${var%%Pattern}
```
从变量 $var 的结尾删除最短或最长匹配 $Pattern 的子串. 


${var:pos}

变量var从位置pos开始扩展

${var:pos:len}

变量var从位置pos开始, 并扩展len个字符.
${var/Pattern/Replacement}

使用Replacement来替换变量var中第一个匹配 Pattern 的字符串.

如果省略Replacement, 那么第一个匹配Pattern的字符串将被替换为空, 也就是被删除了.
${var//Pattern/Replacement}

全局替换. 所有在变量var匹配Pattern的字符串, 都会被替换为Replacement.

${var/#Pattern/Replacement}

如果变量var的前缀匹配Pattern, 那么就使用Replacement来替换匹配到Pattern的字符串.
${var/%Pattern/Replacement}

如果变量var的后缀匹配Pattern, 那么就使用Replacement来替换匹配到Pattern的字符串.

${!varprefix*}, ${!varprefix@}

匹配所有之前声明过的, 并且以varprefix开头的变量.


## 进制转换