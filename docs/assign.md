---
slug: object.assing
title: Object.assign
---

### Object.assign 与 对象展开运算符 ...的区别

:::tip
先说结论：二者都是*浅拷贝*
:::

```javascript
// 1、扩展运算符：
let outObj = {
    inObj: {a: 1, b: 2}
}
let newObj = {...outObj}
newObj.inObj.a = 2
console.log(outObj) // {inObj: {a: 2, b: 2}} // 浅拷贝

// 2、Object.assign
let outObj = {
    inObj: {a: 1, b: 2}
}
let newObj = Object.assign({}, outObj)
newObj.inObj.a = 2
console.log(outObj) // {inObj: {a: 2, b: 2}} // 同样是浅拷贝
```

:::note
Object.assign() 会调用 setter，即 Object.assign() 修改了一个对象，因此它可以触发 ES6 setter。
:::

```javascript
class MyClass {
    set val(v) {
        console.log('Setter called', v);
        return v;
    }
}

const obj = new MyClass();

Object.assign(obj,  { val:  42  }); // console Setter called 42

{...obj, ...{val: 42}}; // console nothing
```

:::caution
如果一个 Object 使用了 Object.defineProperty 修改了 set 方法，再调用 Object.assign()，会用意想不到的错误。（因为 Object.assign() 会触发 setter）
:::