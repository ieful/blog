---
slug: map
title: map
---

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