---
sidebar_position: 1
---

# 开始之前

假定你已经掌握了 linux 系统的基本使用，掌握了某一种编辑器如vim/emacs/vscode等的基本使用，并且已经具备了一个实验环境。


## 创建第一个脚本文件

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