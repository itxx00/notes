---
sidebar_position: 6
---

# 循环

bash也支持多种循环控制，比如`while`、`for`、`until`，使用好这些循环结构是非常有必要的。有个故事是这样的：
```
老总📞秘书：这几天我带你去北京走走，你准备下
秘书📞老公：这几天我要去北京开会，你自己照顾自己
老公📞情人：这几天我老婆出差，我们也出来玩吧
情人📞小孩：这几天不用上课，我有事情
小孩📞爷爷：这几天老师有事不用上课，你陪我玩吧
爷爷📞秘书：这几天我要陪孙子玩，不能去北京了
秘书📞老公：这几天老总有急事，我不去北京开会了
老公📞情人：这几天不能出来玩，我老婆不去北京了
情人📞小孩：这几天继续正常上课
小孩📞爷爷：这几天还是要上课，我不能陪你玩了
爷爷📞秘书：这几天还是带你去北京走走的，你准备下...
```
足以见得掌握好循环结构的重要性，怕翻车就赶紧跟着老司机操练起来吧。

## for循环
基本结构是这样：

```for name [in items ... ] ; do commands; done```

for会循环列表中的每个元素，并重复执行后面的commands，每次循环列表中的一个元素会被赋值给name，其中列表元素是可选的，如果没有的话就默认循环`$@`也就是位置参数中的内容。下面看一个简单的示例：
```bash
#!/bin/bash

for food in "$@"; do
    [[ $food =~ [🚬|🍷] ]] && {
        echo "ignore $food"
        continue
    }
    [[ $food =~ 💊 ]] && {
        echo "game over $food"
        break
    }
    echo "I want $food"
done
```
看一下执行效果：

![for](./img/for.png)

可以看到for循环的执行流程，并且在for循环中可以使用`continue`来跳过当前循环继续下一个元素的循环，使用`break`来提前终止整个循环。

## while循环

基本结构是这样：

```while condition; do commands; done```

当条件成立，while循环会持续执行commands，直到条件不成立即终止。看示例：
```bash
#!/bin/bash

num=0
while [[ $num -ne 10 ]]; do
    num=$((num+1))
    [[ $num = 4 ]] && continue
    [[ $num -gt 8 ]] && break
    echo $num
done
```
可以看到while循环会先对指定条件进行测试，当条件成立时就会不停歇的执行内部的代码块，和for循环一样，也可以通过continue跳过当前循环进入下一循环，通过break提前终止循环。while循环通常会和`read`连用用于逐行读取文本内容，示例如下：
```bash
#!/bin/bash

while read -r line; do
    user=$(awk -F':' '{print $1}' <<<$line)
    uid=$(awk -F':' '{print $3}' <<<$line)
    [[ $uid = 0 ]] && echo "$user niubi"
done
```
看下执行结果：

![for](./img/while.png)

可以看到当脚本中while循环体没有为其指定输入来源时，默认会接受标准输出作为输入，因此我们通过管道将passwd文件内容输入给了脚本，并得到了令人~~满意~~吃惊的结果。

## until循环

和while循环类似，基本结构是这样：

```until condition; do commands; done```

与while不一样的是当条件不成立，until循环会持续执行commands，直到条件成立即终止。简单示例如下：
```bash
#!/bin/bash

num=0
until [[ $num -eq 10 ]]; do
    num=$((num+1))
    [[ $num = 4 ]] && continue
    [[ $num -gt 8 ]] && break
    echo $num
done
```


那么小问题来了，分别使用`for`/`while`/`until`如何写一个简短的死循环？😈 

**老司机提示：** 请勿在生产环境调试代码！道路千万条，安全第一条，驾驶不规范，亲人两行泪。