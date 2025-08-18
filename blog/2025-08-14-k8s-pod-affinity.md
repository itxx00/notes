---
layout: post
title: "k8s pod亲和性与反亲和性"
authors: itxx00
description: "k8s 基础知识总结"
categories: [k8s]
tags: []
---


k8s 基础知识整理。

## 1. 亲和性

在Kubernetes中，PodAffinity（Pod亲和性）用于指定Pod希望调度到与满足特定标签选择器的Pod相同的节点或拓扑域上，从而实现Pod的聚合部署，比如为了提高数据局部性或减少网络延迟。

podAffinity主要有以下几种可用的规则：

- requiredDuringSchedulingIgnoredDuringExecution

    - 强制规则，调度时必须满足，否则Pod无法调度成功。
    - 调度器会确保新Pod必须调度到至少有一个匹配标签的Pod所在的节点或拓扑域中。
    - 适用于必须和特定Pod放在一起的场景。

- preferredDuringSchedulingIgnoredDuringExecution
    - 优先规则，调度时尽量满足，但不强制。
    - 调度器会尽量将Pod调度到有匹配Pod的节点或拓扑域，但如果无法满足，也会调度到其他节点。
    - 用于提高Pod的聚合度，但允许一定的灵活性。

- TopologyKey
    - 用于指定亲和性生效的拓扑域，比如`kubernetes.io/hostname`（节点级别）、`failure-domain.beta.kubernetes.io/zone`（可用区级别）等。
    - 亲和性规则基于该拓扑域进行匹配。

示例：
```yaml
podAffinity:
  requiredDuringSchedulingIgnoredDuringExecution:
  - labelSelector:
      matchExpressions:
      - key: app
        operator: In
        values:
        - myapp
    topologyKey: "kubernetes.io/hostname"
```
上面规则表示新Pod必须调度到与已有标签`app=myapp`的Pod相同节点。

## 2. 反亲和性
Pod的podAntiAffinity（反亲和性）允许你指定Pod不应该调度到某些满足特定标签选择器的Pod所在的节点上，从而实现Pod的分散部署，避免单点故障。
在 preferredDuringSchedulingIgnoredDuringExecution 部分，设置了一个权重值（weight），值越高表示越倾向于满足这个条件。

规则和podAffinity类似，示例：
```yaml
spec:
  affinity:
    podAntiAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        - weight: 100
          podAffinityTerm:
            labelSelector:
              matchExpressions:
              - key: app
                operator: In
                values:
                - myapp
            topologyKey: "kubernetes.io/hostname"
```
上面规则表示新Pod不能调度到已经有标签`app=myapp`的Pod所在的节点。


