---
sidebar_position: 1
---

# 开始之前

假定你已经掌握了 linux 系统的基本使用，掌握了某一种编辑器如vim/emacs/vscode等的基本使用，并且已经具备了一个实验环境。


## 第一个脚本

```bash
vi first-script.sh
```
编辑如下内容

```bash
#!/bin/bash

echo -e "hello bash \xf0\x9f\x98\x81"

```

保存执行

```
chmod +x first-script.sh
./first-script.sh
```

你将得到下面的输出
![first-script](img/first-script.png)

至此你已经掌握了如何创建一个 shell 脚本文件，并且赋予其可执行权限，执行并得到了预期的输出。

## 认识脚本解释器
接下来需要简单解释一下脚本的内容：

第一行的 `#!/bin/bash` 用来指定脚本类型文件的解释器，其作用就是当一个非二进制文件被赋予了可执行权限后，一旦被执行他将通过什么东西来执行文件中接下来的内容。其中`#!`是一个固定写法，你可以在很多地方找到关于这货的解释，英文叫 `sha-bang` (#-sharp, !-bang) 或者she-bang，喜欢考古的可以在网上巴拉下shabang的来历，总之不管他是什么棒记住就这样写就对了。

后面的`/bin/bash`就是指定这个文件的解释器或者叫执行器。除了bash以外，还有其他很多的shell例如dash、zsh等，不同的shell有一些细节的语法差异，但大部分都一样，但bash应该是所有系统都带的，通常shell作为日常使用的终端你可以根据自己喜好选择，比如很多人喜欢oh-my-zsh，但是shell作为脚本工具来执行的话为了获得良好的兼容性，我通常就建议脚本文件里面统一用bash。除了shell解释器以外，这一行还可以写成别的东西，例如：
```bash
#!/bin/cat
hello old driver
```
执行这个文件将会把这个文件自身的内容cat出来。那么问题来了，假如我们执行一个不包含第一行解释器的文件会怎样呢？动手试试看看😉