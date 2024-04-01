---
slug: interview
title: 印象中的一些面试题
---


#### 一道作用域和this指针的题目：
```javascript
    // 不要看答案，你能说出下面，三个log的打印结果吗？
    window.name = 'window';

    function Person(name) {
        this.name = name;
    }
    
    Person.prototype.print = function() {
        return this.name;
    }
    Person('abc');
    let a = new Person('abc').print.call({});
    console.log(a);
    
    let fn = () => {
        this.name = 'z'
    };
    let b = {name: 'y'};
    fn.call(b);
    console.log(b.name);
    
    let c = new Person('abc').print;
    console.log(c());
```

解析：
```javascript
    window.name = 'window'; // 全局window对象属性name为window
    
    // 构造函数定义
    function Person(name) {
        this.name = name;
    }
    // 构造函数的原型上有一个print方法
    Person.prototype.print = function() {
        return this.name; // 方法签名是返回 this.name
    }
    // 函数调用
    // 注意：因为不是通过new调用的，而是全局调用，所以此时Person()被当作一个普通的函数
    // 被window调用，所以在Person中 this.name = name 的this指向的是window，因此执行完此函数window.name = 'abc'
    Person('abc');
    // new了一个Person的实例，然后以call的形式调用实例原型对象上的print方法，调用者是一个空对象，空对象上并没有name属性，因此应该返回的是undefined;
    let a = new Person('abc').print.call({});
    console.log(a); // 因此第一个打印是 undefined
    
    // 定义了一个箭头函数，注意箭头函数是没有this的，其this指向其外部的作用域，在这里就是window;
    let fn = () => {
        this.name = 'z'
    };
    // 定义了一个对象b
    let b = {name: 'y'};
    // fn被call形式调用，调用者是b,因箭头函数的this指向的是外部作用域window,所以改变的是window的name
    fn.call(b); // 此时window.name被改成 z
    console.log(b.name); // b.name 没有改变因此 第二个打印是 'y'
    
    let c = new Person('abc').print; // new了一个实例然后将其原型对象上的print方法赋值给一个变量 c
    console.log(c()); // c()的调用是在全局调用的，因此this指向的是window因此打印的是window的name 第三个打印的是 'z'


    // 所以最终的打印结果是：undefined 'y' 'z'
```

:::caution
这里最容易出错的是第二个打印结果
```javascript
    let fn = () => {
        this.name = 'z'
    };
    
    let b = {name: 'y'};
    fn.call(b);
```
在这里fn箭头函数被以**call**的形式调用，并且对象b的确有一个name属性，因此我们极易认为在执行时this指向了b,毕竟call就有
 *借用* this指向执行函数的作用，而且我们也知道在js中this的指针是在实际调用的时候才确定的，但是！！！亲爱的这一切都不适用
于箭头函数呀！八嘎呀路！！ 切记： 

**箭头函数体内的 this 对象，就是定义该箭头函数时所在的作用域指向的对象，而不是函数执行时所在 的作用域指向的对象** 

**箭头函数体内的 this 对象，就是定义该箭头函数时所在的作用域指向的对象，而不是函数执行时所在 的作用域指向的对象** 

**箭头函数体内的 this 对象，就是定义该箭头函数时所在的作用域指向的对象，而不是函数执行时所在 的作用域指向的对象** 

重要的事情写三遍‼️

所以当
```js
    let fn = () => {
        this.name = 'z'
    };
```
箭头函数被定义的时候，其内部的 this 就被绑定到了此时其指向的外部作用域对象window上了，无论后续其被怎么调用，其内部的this都是
指向的window.

血的教训🩸🩸🩸
:::