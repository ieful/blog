---
slug: git/upgrade
title: Git进阶
---

### 远程仓库

#### 先有本地后有远程 (将本地已有仓库关联远程仓库 )

```baah
$ git remote add origin [your remote repository address] # 关联远程

$ git push -u origin master # 把本地库的所有内容推送到远程库上
```

:::info
由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。
:::

#### 先有远程后有本地

先创建远程库，然后从远程库克隆即可

```bash
git clone your remote repository address
```


### 分支

每次提交，Git都把它们串成一条时间线，这条时间线就是一个分支。截止到目前，只有一条时间线，在Git里，这个分支叫主分支，即master分支。HEAD严格来说不是指向提交，而是指向master，master才是指向提交的，所以，HEAD指向的就是当前分支。
一开始的时候，master分支是一条线，Git用master指向最新的提交，再用HEAD指向master，就能确定当前分支，以及当前分支的提交点它们的关系如下图：

![head](/img/head.png)

每次提交，master分支都会向前移动一步，这样，随着你不断提交，master分支的线也越来越长。

当我们创建新的分支，例如dev时，Git新建了一个指针叫dev，指向master相同的提交，再把HEAD指向dev，就表示当前分支在dev上：

![head](/img/dev.png)

这就是为什么Git创建一个分支很快，因为除了增加一个dev指针，改改HEAD的指向，工作区的文件都没有任何变化！
不过，从现在开始，对工作区的修改和提交就是针对dev分支了，比如新提交一次后，dev指针往前移动一步，而master指针不变：

![head](/img/commit.png)