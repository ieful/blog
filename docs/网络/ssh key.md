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
:::note
注意这是最简单的生成公钥的命令`ssh-keygen`,在向github等代码托管仓库中添加公钥的时候，如果遇到无法添加成功，
可以使用下面👇更加完整的命令
:::

```bash
ssh-keygen -t rsa -C '这是一个注释'
```
:::note
上面👆的ssh-keygen命令是更加完整的使用，其中 `ssh-keygen` 是命令，`-t`是设定要创建的密钥类型，常用的类型
有RSA、DSA和ECDSA。一般我们用rsa。 `-C`用于指定一个注释，用于标识改密钥的用途，一般大家都用一个邮箱📮。这
里要说的是，如果在不同的电脑上用同一个邮箱做注释生成的密钥在向github添加的时候有时候会添加不上去，因此建议用不一样的邮箱
:::

#### 查看生成的ssh公钥
```bash
cat ~/.ssh/id_rsa.pub
```
#### 测试生成的ssh

```bash
ssh -T git@github.com

在将生成的公钥添加到github上后，输入以上命令，如果返回以下👇信息，则说明设置成功了

Hi ieful! You've successfully authenticated, but GitHub does not provide shell access.
```
