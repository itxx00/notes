---
layout: post
title: "普通用户执行systemctl启停服务禁用密码认证"
authors: itxx00
description: "年纪大了记性不好"
categories: [shell]
tags: [bash, ]
---

在CentOS系统中默认情况下，使用普通用户管理系统服务启停会要求认证，输出类似如下：
```bash
systemctl restart xxx
==== AUTHENTICATING FOR org.freedesktop.systemd1.manage-units ===
Authentication is required to manage system services or units.
Authenticating as: root
Password:


```

这里的认证是systemd引入polkit认证，可以通过polkit配置文件来改变默认行为，例如和配置某个普通用户免密执行sudo一样，这里也可以配置polkit认证免密：

配置文件路径:/etc/polkit-1/localauthority/50-local.d/xxx.pkla

例如 vi /etc/polkit-1/localauthority/50-local.d/xxx.pkla

```bash

[disable auth for admin]
Identity=unix-user:yourusername
Action=*
ResultActive=yes
ResultAny=yes
ResultInactive=yes
```

保存配置立即生效，再执行systemctl restart就不会提示认证了。




