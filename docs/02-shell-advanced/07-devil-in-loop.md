---
sidebar_position: 7
---
# 循环中的坑点

## 案例1：管道之后的while

## 案例2：while之后的重定向文件
```bash
    while read -r line; do
        [[ -n $line ]] || continue
        echo $line
    done </tmp/testfile
```
没有任何输出， why？
```
❯ file /tmp/testfile
/tmp/testfile: Unicode text, UTF-8 text, with no line terminators
```

how to fix ？
```
f=/tmp/testfile
[[ -n "$(tail -c1 $f)" ]] && echo >>$f
```



