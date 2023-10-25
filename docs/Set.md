---
slug: set
title: Set
---


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
