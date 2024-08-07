---
layout: post
title: "如何通过loop模拟一个lvm逻辑卷"
authors: itxx00
description: "年纪大了记性不好"
categories: [shell, system]
tags: [bash, ]
---

某些时候我们需要一个lvm逻辑卷，但是又没有多余的磁盘设备可用，这时可以通过模拟的方式创建一个设备出来，步骤如下：
```bash
# 首先创建一个虚拟block文件
dd if=/dev/zero of=pv1 bs=1M count=5000
# 然后通过losetup将其挂载到loop0设备上
sudo losetup /dev/loop0 pv1
# 查看状态
sudo losetup
# 这时可以对loop0设备进行操作，当做一个block设备使用
sudo pvcreate /dev/loop0
sudo vgcreate vg0 /dev/loop0
sudo lvcreate -n lv0 -l 100%FREE vg0
# 创建好lv之后就可以继续格式化文件系统
sudo mkfs.ext4 /dev/vg0/lv0
sudo mkdir /data01
sudo mount /dev/vg0/lv0 /data01
```
这样我们就完成了通过dd出一个空文件，然后通过loop设备模拟了一个lvm逻辑卷出来。
使用完之后清理：
```
sudo umount /data01
sudo lvremove /dev/vg0/lv0
sudo vgremove vg0
sudo pvremove /dev/loop0
sudo losetup -d /dev/loop0
rm pv1
```
