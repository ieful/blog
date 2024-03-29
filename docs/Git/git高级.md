---
slug: git/pro
title: Git高级
---

### cherry-pick

_将代码从一个分支转移到另一个分支_

在多分支的代码库中，如果你需要另一个分支上的所有代码变动，那么就采用合并(merge),另一种情况是你只需要它上面的部分代码变动(某几个提交)，这时就可以采用Cherry pick.

```bash
# 基本用法
git cherry-pick <commitHash>  # 代表将指定的提交应用于当前分支，这会在当前分支产生一个新的提交。
```

:::tip
`git cherry-pick` 命令的参数不一定是提交的哈希值，也可以是分支名，表示转移该分支的**最新提交**
:::

cherry-pick也支持一次转移多个提交：

```bash
$ git cherry-pick <HashA> <HashB> # 将 A 和 B 两个提交应用到当前分支。这会在当前分支生成两个对应的新提交
```

如果想要转移一系列的连续提交，可以使用下面的简便语法:

```bash
$ git cherry-pick A..B
```
👆上面的命令可以转移从 A 到 B 的所有提交。它们必须按照正确的顺序放置：提交 A 必须早于提交 B，否则命令将失败，但不会报错。

:::caution
注意，使用上面的命令，提交 A 将不会包含在 Cherry pick 中。如果要包含提交 A，可以使用下面的语法:

```bash
$ git cherry-pick A^..B 
```
:::

### git rebase

#### 合并多个commit

`git rebase -i starHash endHash` 应用场景：本地开发功能过程中由于提交了多次，后来发现提交有点冗余，希望将这几次提交合并成一次提交。(这不就是日常需求开发中经常遇到的吗😺)

:::caution
注意👆的区间我特意标识了出来是一个**(左开右闭]**的区间，通常_endHash_可以省略，表示当前分支中HEAD指向的提交。
:::

举个例子🙋🌰:

![rebase](/img/rebase.png)

上图中显示了我最近的几次提交记录，现在我想将 456、 789、 101112这三次的提交记录从时间线上消除掉，只显示123，那么我应该
找到 ***123之前*** 的那次提交的commitHash 然后执行 `git rebase -i commitHash`
:::caution
注意：因为git rebase -i 的开始区间是**不被包含在内的**，所以如果你是要把123之后的提交记录都*融合* (meld into)到123这次提交中去，
那么就要找到123之前的那次提交记录的commitHash而不是123的！！
:::

![reabase2](/img/rebase2.png)

👆上面中是执行了  `git rebase -i 2cc127f`之后的交互式弹窗，我们在这里编辑要合并的策略即可，我们保留(pick)123的提交,
将其他三个提交融合进123这次提交之中，将其前面的pick修改成s,保存退出即可

![rebase-s](/img/rebase-s.png)

结束之后我们看我们的提交历史已经只剩下123了😄！

![rebaseend](/img/rebaseend.png)

### 快捷命令

#### 导航 —— 跳到之前的分支

```bash
git checkout -
```

#### switch

创建并切换到新的分支,除了可以使用 git checkout -b 还可以用switch

```bash
git switch -c newbranch
```

#### 查看所有提交历史

```bash
git reflog
```

#### 回滚到相应提交

```bash
git reset --hard <提交的哈希值>
```

#### 编辑上次提交

```bash
git commit --amend -m "更好的提交日志"
```

#### 暂存

```bash
git stash #暂存工作区和暂存区的修改
git stash save 'message ...' #可以添加一些注释,推荐添加注释,不然有多个的时候你会分不清
git stash list #显示暂存的列表
git stash pop #恢复最新的的进度到工作区
git stash pop stash@{1} #恢复指定的进度到工作区。stash_id是通过git stash list命令得到的
```

### revert

讲一下 `revert` 命令

在回滚版本的时候，如果是本地回滚，那么直接找到需要回滚到的版本哈希直接执行 `git reset --hard commitHash`即可

如果是回滚远程的版本，你可以想上面👆那样先回滚本地的版本，然后再提交到远程，但是这时**因为本地版本落后远程分支提交远程会失败**(😖)，必须使用**强制推送**(push -f)覆盖远程分支。但是这样还有问题，你的同事这时pull之后，会发现他本地
比远程领先几个提交，如果在不之情的情况下同事再向远程提交了，那么远程的代码就又回到了回滚之情的状态～🤷‍♂️

这时就有一种更优雅的方式---revert

`git revert `命令意思是撤销某次提交, **它会产生一个新的提交，虽然代码回退了，但是版本依然是向前的**，所以当你用revert回退之后，所有人pull之后，他们的代码也自动的回退了。

:::caution
revert 是撤销一次提交，所以后面的commit id是你需要回滚到的版本的前一次提交, 使用revert HEAD是撤销最近的一次提交，如果你最近一次提交是用revert命令产生的，那么你再执行一次，就相当于撤销了上次的撤销操作，换句话说，你连续执行两次revert HEAD命令，就跟没执行是一样的.
使用revert HEAD~1 表示撤销最近2次提交，这个数字是从0开始的，(git中的次数都是从0开始的哦！😮‍)如果你之前撤销过产生了commi id，那么也会计算在内的。
:::









