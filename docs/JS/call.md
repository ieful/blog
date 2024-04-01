---
slug: call
title: call
---

:::note
    The call() method of Function instances call this function with a given this value and
arguments provided individually.
:::

```javascript
// 实现
Function.prototype.myCall = function (context, ...args) {
    context.fn = this; // 临时给当前对象context添加一个随意名字的函数fn并指定其逻辑为this
    context.fn(...args); // 执行刚刚添加的函数
    delete context.fn; // 用完就丢弃即可
}
```





