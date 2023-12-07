---
title: Import vs Require
---


### CommonJS

* CommonJS使得在文件中定义和共享模块变得容易。CommonJS是为服务端设计的，使用module.exports来输出代码，使用require来引入代码。

* CommonJS 是同步的，这意味着 require()方法会阻塞js的执行，直到模块被加载完毕。

* CommonJS 模块使用一种叫做 global leaky bucket （中文翻译为全局漏桶）的机制，在这种模式中模块中声明的变量被添加到全局作用域中，因此其他模块都可以访问


#### 单个方法

**输出**

1、先定义方法:    const greeting = ....

2、再输出方法:    module.exports  = greeting

**输入**

1、使用声明变量承接:  const greeting = require(./foo.js)

2、使用: greeting()

#### 多个方法

**输出**

1、分别定义多个要对外输出的方法

```js
const greeting = ....

const greeting_VIP = ...
```

2、module.exports 不再是指向一个方法，而是一个对象，对象中包含要输出的方法

```js
    module.exports  = {
        greeting,
        greeting_VIP
    }
```

**输入**

可以使用ES6中的对象展开

```js
const {greeting, greeting_VIP} = require('./foo.js')
```

当然也可以不使用对象展开

```js
const foo = require('./foo.js')
```
这样使用的时候就是

foo.greeting(args)    和 foo.greeting_VIP(args) 的方式了


### ES Modules

#### 一个方法

**导出**

使用default

```js
const greeting = (name)=> console.log(`Hello! ${name}`)
const greeting_VIP = (name)=> console.log(`Hello! ${name}. You are VIP`)

export default greeting // only exports greeting.

```

**导入**

```js
import greeting from './foo.js'
```

:::tip
因为他是用default 导出的，所以导入时
这个名字可以自定义
:::

#### 多个方法

**导出**

直接使用 export 关键字声明定义的函数

```js
export const greeting = (name)=> console.log(`Hello! ${name}`)
export const greeting_VIP = (name)=> console.log(`Hello! ${name}. You are VIP`)

// 或者也可以
export { greeting, greeting_VIP };
```

**导入**

使用 import {} from 的方式

```js
import {greeting, greeting_VIP} from './foo.js' // same destructuring pattern.
```

注意和commonjs的区别，commonjs是 const variable = require() 的方式




