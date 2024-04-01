---
slug: valueOf
title: a == 1 && a == 2 && a == 3
---

```javascript
if (a == 1 && a == 2 && a == 3){
    console.log('success');
}
// 思考如何使得以上条件成立？
// 主要考察的是js的类型转换，js在做比较运算的时候内部会进行类型转换，我们用排除法
// 假如a是一个Number、Boolean、String类型那么在进行类型转换的时候顶多只会变成一个值，
// 不可能同时等于 1 2 3 所以a 肯定是一个对象，对象在进行数值比较的时候会调用valueOf方法，于是
let a = {
    value: 1,
    valueOf: () => {
        return this.value;
        value++
    }
}
// 这样就能满足要求了
```