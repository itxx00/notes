---
layout: post
title: "minio节点迁移"
authors: itxx00
description: ""
categories: [k8s,minio]
tags: [k8s,minio]
---


minio节点迁移

## 1. 备份
```bash
dir=/data
mc mirror minio/ $dir/backup/minio_backup.$time --overwrite
```

## 2. 重建 pv
```bash
mkdir -p $dir/backup/minio_${minio_pod}_$time
cd $dir/backup/minio_${minio_pod}_$time
kubectl get pod ${minio_pod} -n ${minio_namespace} -o yaml > minio-pod-${minio_pod}.yaml
minio_pvc=$(kubectl describe pod ${minio_pod} -n ${minio_namespace} | grep ClaimName | awk '{print $NF}')
echo ${minio_pvc}
kubectl get pvc ${minio_pvc} -n ${minio_namespace} -o yaml > minio-pvc-${minio_pvc}.yaml
minio_pv=$(kubectl describe pvc ${minio_pvc} -n ${minio_namespace} | grep Volume: | awk '{print $NF}')
echo ${minio_pv}
local_dir=$(kubectl describe pv ${minio_pv} -n ${minio_namespace} | grep Path | awk '{print $NF}')
echo ${local_dir}

# 备份pv
kubectl get pv ${minio_pv}  -o yaml > minio-pv-${minio_pv}.yaml
# 编辑
cp minio-pv-${minio_pv}.yaml minio-pv-${minio_pv}-new.yaml
vi minio-pv-${minio_pv}-new.yaml
```

```yaml
spec:
  nodeAffinity:
    required:
      nodeSelectorTerms:
      - matchExpressions:
        - key: kubernetes.io/hostname
          operator: In
          values:
          - ${new_ip}
```

```bash
# 删除pv，由于pv是绑定状态，需要手动Ctrl+C终止
kubectl delete pv ${minio_pv}

# 修改pv,删除' - kubernetes.io/pv-protection'
kubectl edit pv ${minio_pv}

# 检查pv是否成功删除
kubectl get pv ${minio_pv}

# 迁移后节点创建本地目录
ansible ${new_ip} -m file -a "path=${local_dir} state=directory"

# 重建pv
kubectl apply -f minio-pv-${minio_pv}-new.yaml

# 检查pv，要求状态为Bound
kubectl get pv ${minio_pv}
status=$(kubectl get pv ${minio_pv} | grep -v NAME | awk '{print $5}')
$status == "Bound"则符合预期
```

## 3. 重启 pod
```bash
kubectl delete pod ${minio_pod} -n ${minio_namespace}
# 检查pod状态
kubectl get pod ${minio_pod} -n ${minio_namespace} -owide
node=$(kubectl get pod ${minio_pod} -n ${minio_namespace} -owide | grep -v NAME | awk '{print $7}')
$node == ${new_ip}则符合预期
```

## 4. 检查
```bash
mc admin info minio
```
