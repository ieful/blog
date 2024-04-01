---
slug: Map
title: Map
---

### Map

Map类似于对象，也是键值对的集合，但是*键*的范围不限于字符串，各种类型的值包括对象都可以当作键，是一种更完善的Hash结构实现。

#### WeakMap

WeakMap与Map结构类似，也是用于生成键值对的集合，与Map的区别有两点：

* WeakMap只接收*对象* （null）除外和*Symbol值*作为键名
* WeakMap的键名指向的对象不计入垃圾回收机制。（跟WeakSet一样）

### Map的基本Api

* 创建：const map = new Map();
* 插入：map.set(name, value);
* 读取：map.get(name);
* 判断：map.has(name);
* 删除: map.delete();
* 大小: map.size



### Map与Object的选择

* 内存占用：Map能比Object多存储50%的键值对，遇到**大体量**结构化存储数据，选择Map
* 插入性能：Map性能更好一些，特别是涉及到大量插入操作，尤为明显，选择Map
* 查找性能：性能想当，当键值对较少的情况下，浏览器引擎会对Object有相关的优化策略，选择Object
* 删除：Map性能优势明显，利用delete关键字删除对象的属性，仅仅只是解除绑定，内存没有释放，并不是真正的删除，而且会破坏V8引擎中的线性结构。选择Map
