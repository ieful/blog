---
slug: set
title: Set
---


### 基本用法

Set类似于数组，但是成员的值都是唯一的，没有重复。

* 创建: ```const set = new Set();```
* 插入: ```set.add()```
* 判断: ```set.has()```
* 删除: ```set.delete()```
* 大小: ```set.size()```
* 遍历: ```for of```


```javascript
// 数组去重
let arr1 = [1,1,2,2,3,3];
let arr2 = [4,5,6,7];
let result = [...new Set(arr1)];

// 求交集
let result2 = [...new Set(arr1.filter(item => arr2.includes(item)))];

// 求并集

let result3 = [...new Set([...arr1, ...arr2])];

// 求差集
let result4 = result3.filter(item => !result2.includes(item)); // 在并集中过滤到交集中的元素就是差集
```

### WeakSet

WeakSet结构与Set类似，也是对不重复的值的集合，但是与Set有两个重要的区别：

* WeakSet的成员只能是*对象*或者*Symbol*
* WeakSet中的对象都是*弱引用* （不然怎么叫Weak呢~）垃圾回收机制不考虑WeakSet对对象的引用，当其他对象都不再引用该对象的时候，那么垃圾回收机制会自动回收对象占用的内存，不用考虑对象还在WeakSet中


















