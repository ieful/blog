---
slug: js/format-types
title: JavaScript的不同格式类型
date: 2023-07-22
authors: Allen
tags: [UMD, AMD, CJS, ESModule, IIFE]
---
参考：https://betterprogramming.pub/what-are-cjs-amd-umd-esm-system-and-iife-3633a112db62

### 格式类型

现代JS开发会被打包器打包📦成各种格式，不同的格式分别可以运行在不同的环境之中，主要的打包格式和其适用范围如下

* cjs (CommonJS) 适用于Node环境
* amd (Asynchronous Module Definition ~ 异步模块定义)适用于使用RequireJS进行模块加载
* umd (Universal Module Definition ~ 通用模块定义) amd、cjs、iife都支持
* es (ESModule) 标准的es6模块化规范，适用于支持es6模块的打包器以及支持 `<script type=module>` 的现代浏览器
* iife (Immediately Invoked Function Expression) 自执行函数格式，适用于直接通过 `<script>` 标签引入
* system SystemJS加载器的的本机格式 https://github.com/systemjs/systemjs


### CommonJS (CJS)

CommonJS是Node及其生态环境中使用的格式类型，被广泛的应用于服务端。CommonJS可以通过require()方法和module.exports命令来识别。
require()方法用于导入一个node模块，而module.exports是模块被require()方法导入时返回的对象。

:::tip
CommonJS最初就是设计用来在服务端使用的，所以它的API自然地都是同步，也就是说CommonJS的模块导入顺序是按书写顺序导入的。
:::


👇下面是一个用roll-up生成的CommonJS格式的文件📃
```bash
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Increase the current total value
 * @param {number} total The current total value
 * @param {number} value The new value to be added
 * @returns {number} The new total value
 */
const increase = (total, value) => total + value;

/**
 * Decrease the current total value
 * @param {number} total The current total value
 * @param {number} value The new value to be subtracted
 * @returns {number} The new total value
 */
const decrease = (total, value) => total - value;

var others = {
  a: 1,
  b: 2,
  c: () => 3,
};
const e = 5;

/**
 * This is the main file
 */

function multiply(total, value) {
  return total * value;
}

function power(total, value) {
  return total ** value;
}

let total = others.a;

total = increase(total, 10);
total = increase(total, 20);
total = decrease(total, 5);
total = multiply(total, e);

console.log(`Total is ${total}`);

exports.power = power;
```
👆上面的文件直接在浏览器中执行会报错 `exports is not defined`

:::tip
可以通过添加如下代码来修复上面的报错

```bash
<script>
  const exports = {};
</script>
```

:::


### UMD格式 (Universal Module Definition)

UMD被设计既能在服务器端运行也能在浏览器中运行，其内部使用AMD格式作为基础，并添加了很多特殊的 `外壳代码` 用来处理CommonJS的兼容。
然而，兼容性增加了一些复杂性，也使得读写变得复杂。

### ESM (ES2015 Module)
官方出品的模块化标准。Since the version of ^12.20.0 || ^14.13.1 || >=16.0.0, Node starts to support ESM. ESM gains popularity to be used for both clients and servers.
～ Node支持ESM后ESM越来越受欢迎👏，可以同时在客户端和服务端开发运行。
esm的 `import` 指令可以将一个es模块导入当前的作用域，而动态的 `import()` 方法在ES2020标准中支持; `export` 指令可以将模块暴露给其他模块供引入。

### IIFE (Immediately Invoked Function Expression)

自执行函数格式适用于直接通过 `<script>` 标签引入代码的方式，它将代码放入函数的命名空间中避免了命名冲突。

### esm和cjs 区分

:::tip
cjs模块是对象，输入时必须查找对象的属性；esm模块不是对象，而是通过`export命令` 显示地指定对外输出的代码，再通过 `import命令` 输入。
:::

#### 先来看cjs的exports和module.exports (commonjs的方法exports是带_s_的哦～😝)

在node执行一个文件的时候，会自动给这个文件内生成一个module对象和一个exports对象，而module对象又一个exports属性，
它们之间的关系如下图，默认都是指向同一块内存的：

![alt text](/img/exports.png)
看代码：

```bash
//example.js
let a = 100;
console.log(module.exports); //打印出结果为：{}
console.log(exports); //打印出结果为：{}
console.log(exports === module.exports); // 输出结果为true

module.exports.a = 100;

exports.a = 200; // 这里exports _辛苦劳作_ 帮 module.exports 将属性_a_的内容给改成200

exports = '指向其他内存区'; // 注意⚠️：这里将exports重新赋值里，exports将不再跟module.exports指向同一内存区域，后面exports的一系列属性设置将不再影响module.exports
...


//test.js 
var a = require('/example'); // 在test.js中通过 `require()` 方法引入example
console.log(a) // 打印为 {a : 200}; // 证明在node中 `require()` 方法引入的内容是module.exports对象而不是exports!!
```
:::tip
exports对象只是为了让你在给模块定义属性的时候，可以少打几个字母，直接用exports.a = 123, exports.b = 456 ...就行了不用麻烦的带着module.exports.a = xxxx
但是千万不要把exports直接赋值给其他值哦～ 一旦写了 exports = xxx exports和 module.exports之间的联系就断了～
:::

#### 再看esm的export、import和export default (esm的export是不带_s_的呢～😉)
esm的模块功能主要由两个命令组成：`export` 和 `import`

##### export

:::info
再次提醒，esm中的 `export` 和 `import` 是命令(或者叫关键字😝)不是方法。
:::

export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。在esm中一个文件就是一个独立的模块，在文件模块内部所有的变量，外部
是无法获取的，如果希望外部能够读取内部的某个变量，就必须显示的使用 `export` 关键字输出该变量。
可以向下面这样👇

写法一：用三个export命令对外输出三个变量
```bash
// profile.js 
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
```

写法二：使用大括号指定所要输出的一组变量👍
```bash
// profile.js 
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
```
:::tip
第二种与前一种写法（直接放置在var语句前）是等价的，但是应该优先考虑使用这种写法。因为这样就可以在脚本尾部，一眼看清楚输出了哪些变量。
:::

通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。像下面这样👇

```bash
function v1() { ... }
function v2() { ... }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};
```

:::caution
需要特别注意的是，export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
:::

👇下面的两种写法都是错的❌
```bash
// 报错
export 1;

// 报错
var m = 1;
export m;
```

上面两种写法都会报错，因为没有提供对外的接口。第一种写法直接输出 1，第二种写法通过变量m，还是直接输出 1。1只是一个值，不是接口。正确的写法是下面这样。

```bash
// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};
```
上面三种写法都是正确的，规定了对外的接口m。其他脚本可以通过这个接口，取到值1。它们的实质是，在接口名与模块内部变量之间，建立了一一对应的关系。

同样的，function和class的输出，也必须遵守这样的写法。

目前，export 命令能够对外输出的就是三种接口：函数（Functions）， 类（Classes），var、let、const 声明的变量（Variables）。

另外，export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。

```bash
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);
```
上面代码输出变量foo，值为bar，500 毫秒之后变成baz。

这一点与 CommonJS 规范完全不同。CommonJS 模块输出的是值的缓存，不存在动态更新.

##### import
使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块

```bash
// main.js
import { firstName, lastName, year } from './profile.js';

function setName(element) {
  element.textContent = firstName + ' ' + lastName;
}
```
上面代码的import命令，用于加载profile.js文件，并从中输入变量。**import命令接受一对大括号**，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。

:::caution
import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。
:::

```bash
import {a} from './xxx.js'

a = {}; // Syntax Error : 'a' is read-only;
```
上面代码中，脚本加载了变量a，对其重新赋值就会报错，因为a是一个只读的接口。但是，如果a是一个对象，改写a的属性是允许的。

```bash
import {a} from './xxx.js'

a.foo = 'hello'; // 合法操作
```
:::info
上面代码中，a的属性可以成功改写，并且其他模块也可以读到改写后的值。不过，这种写法很难查错，建议凡是输入的变量，都当作完全只读，不要轻易改变它的属性。
:::

:::tip
import语句会执行所加载的模块，因此可以有下面的写法。
:::

```bash
import 'lodash';
```
***上面代码仅仅执行lodash模块，但是不输入任何值***。

:::caution
注意⚠️:上面这种情况很多人分不清，网上也很多人理解成 export default的情况，`import 'lodash` 和 `import lodash from 'lodash'` 、`import _ from 'lodash'`
是完全不同的意思，后者很好理解，就是将lodash库引入进来并赋值为`lodash` `_` 变量，而 `import 'lodash` 仅仅只是执行了loadash模块，并没有输入任何值！
网上这里有个例子: https://segmentfault.com/q/1010000006229052
![alt text](/img/meteor.png)
和 css 里 @import xxx.css 类似的功能，`import lodash` 只是把 lodash 这个模块当做静态文件在编译阶段引入而已。。。。
另：ES6 想要 import 一个模块中的变量等内容必须对其做模块解构，否则只会执行代码而没有任何导入的内容。这个道理跟 Node.js 中的模块没有 export 内容就 require 就只会执行代码不会导入内容是一个道理
:::

目前阶段，通过 Babel 转码，CommonJS 模块的require命令和 ES6 模块的import命令，可以写在同一个模块里面，但是最好不要这样做。因为import在静态解析阶段执行，所以它是一个模块之中最早执行的。下面的代码可能不会得到预期结果。

```bash
require('core-js/modules/es6.symbol');
require('core-js/modules/es6.promise');
import React from 'React';
```

##### export default命令
使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。但是，用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法。
为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出。

```bash
// export-default.js
export default function () {
  console.log('foo');
}
```
上面代码是一个模块文件export-default.js，它的默认输出是一个函数。

其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。

```bash
// import-default.js
import customName from './export-default';
customName(); // 'foo'
```
上面代码的import命令，可以用任意名称指向export-default.js输出的方法，这时就不需要知道原模块输出的函数名。**需要注意的是，这时import命令后面，不使用大括号**。
:::tip
上一节的最后一个例子中

```bash
import React from 'React';  
```

`import React` 没有使用打括号，就是因为React库内部使用 `export default` 指定了默认导出接口。
:::

`export default` 命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。

本质上，`export default` 就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。所以，下面的写法是有效的。

```bash
// modules.js
function add(x, y) {
  return x * y;
}
export {add as default};
// 等同于
// export default add;

// app.js
import { default as foo } from 'modules';
// 等同于
// import foo from 'modules';
```

有了export default命令，输入模块时就非常直观了，以输入 lodash 模块为例。

```bash
import _ from 'lodash';
```

如果想在一条import语句中，同时输入默认方法和其他接口，可以写成下面这样。

```bash
import _, { each, forEach } from 'lodash';
```
对应上面代码的export语句如下:

```bash
export default function (obj) {
  // ···
}

export function each(obj, iterator, context) {
  // ···
}

export { each as forEach };
```



