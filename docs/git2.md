---
slug: git2
title: Git基础
---

### 创建版本库

在一个目录下运行 `git init` 命令就可以把当前目录变成git可以管理的仓库：

```bash
    git init
    // Initialized empty Git repository in /Users/Allen/...
```


### .git隐藏目录🫥

使用 `git init` 创建好git仓库后会在当前目录下多出一个 _.git_ 的隐藏目录，这个目录是git用来跟踪管理 **版本库** 的 (没事千万不要乱动这个目录哦～⚠️)

### 版本控制系统的特点

所有的版本控制系统，其实都只能跟踪**文本文件**的改动，比如 _TXT_, _网页_, _程序代码_等。git也是一样，版本控制系统可以告诉你每次的改动，比如在第3行加了一个单词 "Linux"或者在第8行删除了一个单词"Windows"。
而对于图片、视频这些**二进制**文件，版本控制系统是没法对文件的内容进行跟踪的。(所以你就明白为啥互联网人都用markdown写博客了吧～🫡)

:::caution
Microsoft的Word不是纯文本而是二进制格式！！因此，版本控制系统没法跟踪word文件的改动的。
:::

### 工作区和暂存区

**重点来咯～**

#### 工作区 Working Directory

工作区就是你在电脑上能够看到的目录，比如你新建了一个learngit的目录，把该目录用git管理起来，那么learngit的目录就是你的工作区(其实就是咱们平时写代码的地方～🥱)

![learn git](/img/learngit.png)


#### 版本库 Repository

上面说了，在我们用 `git init` 初始化后，在我们的工作区会多出一个隐藏目录 _.git_ 它不属于工作区，而是git的版本库！

在.git中也就是版本库中存放了很多东西，其中最重要的就是成为 **stage** 的 **暂存区** 和git 为我们自动创建的第一个分支 `master`以及指向master分支的一个指针 `HEAD`.

![stage](/img/stage.png)

在进行git操作的时候，脑子🧠里要有这张图哦～

我们平时在使用git把文件添加进版本库的时候，是分2步走的：

* 第一步 `git add`是把文件添加进去，实际上就是把文件修改添加到了上图中的**暂存区**；
* 第二步 `git commit`提交更改，实际就是把暂存区的所有内存提交到**当前分支**；

也就是说，我们平时把需要提交的文件修改统统放到暂存区，然后一次commit提交暂存区中的所有修改到当前分支。

下面跟着demo来理解一下，将工作区中的readme.txt文件进行修改，比如加上一行，然后再向工作区中添加一个LICENSE文件，使用 `git status` 查看一下状态：

```gitexclude
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   readme.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	LICENSE

no changes added to commit (use "git add" and/or "git commit -a")
```
从上面👆可以很清楚的看到，git很明确的告诉我们，readme.txt被修改来，而LICENES还从来没被跟踪过(Untracked状态)。
现在使用 `git add .` 命令将readme.txt的修改和LICENES都添加到暂存区，再用 `git status` 查看一下：

```bash
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   LICENSE
	modified:   readme.txt
```

现在，暂存区的状态就变成如下👇的样子：

![stage2](/img/stage2.png)

所以 git add 命令其实就是把要提交的修改放到暂存区，然后执行 git commit 命令就可以一次把暂存区的所有修改都提交到分支了。
我们继续使用 git commit 命令将暂存区的内容提交到版本库分支上：

```bash
$ git commit -m "understand how stage works"
[master e43a48b] understand how stage works
 2 files changed, 2 insertions(+)
 create mode 100644 LICENSE
```

一旦提交后，如果你又没有对工作区做任何修改，那么工作区就是**“干净”**的：

```bash
$ git status
On branch master
nothing to commit, working tree clean
```
现在版本库变成了如下这样，暂存区中没有任何内容了

![clean stage](/img/clean.png)

#### 管理修改

git比其他版本控制系统设计的优秀的一点是它管理的是文件的修改，而不是文本本身。什么是修改？比如你新增了一行，这就是一个修改，删除了一行，也是一个修改，更改了某些字符，也是一个修改，删了一些又加了一些，也是一个修改，甚至创建一个新文件，也算一个修改。
怎么理解Git管理的是修改，而不是文件呢？ 如果你对同一个文件分别进行两次修改，第一次修改之后，执行 git add 将文件的修改放入暂存区，
然后进行第二次修改，修改后，执行 git commit 提交暂存区的内容，之后运行 git status 查看当前状态，你会发现git 只提交了你第一次对文件的修改，
第二次的修改仍旧躺在你的工作区呢。这就是因为git 管理的是修改，而不是文件，当你用git add 后，工作区的第一次修改被放入暂存区准备提交，
但是在工作区的第二次修改并没有放入暂存区，所以当执行git commit 的时候，git 只负责把暂存区的修改提交。

### 撤销操作

#### 撤销工作区的修改

`git checkout -- file` 可以丢弃**工作区**的修改

`git checkout -- file`的意思是撤销文件在工作区的全部修改，这里可以分成两种情况：

* 文件的修改还没放到暂存区，现在撤回后工作区跟版本库一模一样
* 文件的修改已经放入了暂存区，之后又做了修改，现在撤销后工作区会回到跟暂存区一样的状态

总之，就是让这个文件回到最近一次git commit或git add时的状态。

:::note
git checkout -- file命令中的--很重要，没有--，就变成了“切换到另一个分支”的命令。
:::


#### 撤销暂存区的修改

如果我们有一些不好的修改已经放入了暂存区，但庆幸的是在commit之前发现了问题，用git status查看，修改只是添加到了暂存区，还未提交：

```nashorn js
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   readme.txt
```

👆上面的命令输出同样告诉了我们可以用 `git reset HEAD <file>` 命令将暂存区的修改撤销掉(unstage)，重新放回工作区：

```bash
$ git reset HEAD readme.txt
Unstaged changes after reset:
M	readme.txt
```
`git reset` 命令既可以回退版本，也可以把暂存区的修改回退到工作区，而 **HEAD**表示的是当前最新的版本，所以我们使用

git reset HEAD 的时候，就把暂存区恢复到上一个最新的版本了，此时再用git status查看一下，现在暂存区是干净的，工作区有修改：

```bash
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   readme.txt
```
此时我们就可以用 git checkout -- .将工作区的修改丢弃掉了～

#### 撤销版本库

git 的每次提交都会产生一个用sha1计算出来的很大的数字，用16进制表示成一个commit id的样子。每提交一个新版本，git 就会自动将它们串成一条时间线，
当要进行版本绘图的时候，首先要知道当前在哪个版本，在git 中HEAD表示当前版本，上一个版本用HEAD^表示上两个是HEAD^^ ....
上100个用HEAD~100表示。 我们要回到哪个版本只需要通过 `git log` 或者 `git relog` 找到要回到的那个版本的commit id，
然后使用命令 `git reset --hard commitid` 就行了。

#### 删除文件的情况

在Git中，删除也是一个修改操作，比如先添加一个新文件test.txt到Git并且提交：

```bash
$ git add test.txt

$ git commit -m "add test.txt"
[master b84166e] add test.txt
 1 file changed, 1 insertion(+)
 create mode 100644 test.txt
```

一般情况下，你通常直接在文件管理器中把没用的文件删了，或者用rm命令删了：`$ rm test.txt`

这个时候，Git知道你删除了文件，因此，工作区和版本库就不一致了，git status命令会立刻告诉你哪些文件被删除了：

```bash
$ git status
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	deleted:    test.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

现在你有两个选择，一是确实要从版本库中删除该文件，那就用命令git rm删掉，并且git commit,文件就从版本库中被删除了。

另一种情况是删错了，因为版本库里还有呢，所以可以很轻松地把误删的文件恢复到最新版本：`$ git checkout -- test.txt`

:::tip
`git checkout` 其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。
:::
























