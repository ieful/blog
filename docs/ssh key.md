---
slug: sshkey
title: ssh 公钥生成
---

#### 查看电脑上是否有ssh密钥

```bash
ls -a ~/.ssh
```

#### 生成ssh公钥（一路回车即可）
```bash
ssh-keygen -t rsa
```

#### 查看生成的ssh公钥
```bash
cat ~/.ssh/id_rsa.pub
```