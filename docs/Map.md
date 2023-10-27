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

