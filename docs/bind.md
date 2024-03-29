---
slug: bind
title: bind
---

:::tip
Function实例的bind()方法创建一个新的函数，当调用新函数时，它会调用原始函数并将this关键字设置为给定的值，同时，还可以
传入一系列指定的参数，这些参数会插入到调用新函数时传入的参数的前面。
:::



```javascript
let obj = {
    name: 'xiaoyu',
    showName: () => {
        console.log(this.name);
    }
}
let unbindShowName = obj.showName;
unbindShowName(); // 打印undefined
let boundShowName = unbindShowName.bind(obj);
boundShowName(); // 打印 'xiaoyu'
```

```javascript
// 手写一个bind实现
Function.prototype.myBind = function (context) {
    let self = this;
    return function () {
        self.call(context)
    }
}
```