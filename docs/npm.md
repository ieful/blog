---
slug: npm
title: 关于NPM
---

### Packages 和 modules


#### Packages

一个package是一个被package.json描述的文件或者文件夹（目录）。换句话说一个package必定要有一个package.json描述文件，没有这个文件就不是一个package(包)。
因为没有package.json一个package就无法发布到npm的注册中心。


#### modules
一个module(模块)是在node_modules目录下可以通过Node.js的require()方法加载的文件或者目录。
要想被Node.js的require()加载，必须满足以下其中之一条件：
* 一个文件夹，其中有package.json文件，并且package.json中有main字段
* 一个js文件

:::tip
不是所有的module都是package,只有那些有package.json的module才是package(即是module又是package)
:::
