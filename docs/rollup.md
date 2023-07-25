---
slug: rollup
title: Roll Up The Code! (卷起来😈)
---
#### Compile small pieces of code into something larger and more complex  ~ 将小段代码编译成更大更复杂的程序

```bash
# 编译为适用于浏览器的iife格式（自执行函数）<script>直接引入
rollup main.js --file bundle.js --format iife
```

```bash
# 编译为一个CommonJS模块（'cjs'）
rollup main.js --file bundle.js --format cjs
```

```bash
# 编译为适用于浏览器和Nodejs的UMD类型 （注意UMD需要指定一个包名）
rollup main.js --file bundle.js --format umd --name "myBundle"
```

#### rollup的优点

* 兼容性 Rollup 可以通过插件 导入现有的 CommonJS 模块。
* 发布 ES 模块 可以使用 Rollup 将代码编译成 UMD 或 CommonJS 格式，然后在 package.json 文件中使用 main 属性指向编译后的版本，这样就可以在Nodejs或者webpack这些支持commonjd的环境中使用了；如果在package.json指定了module字段，那么像 Rollup 和 webpack 2+ 这样的可感知 ES 模块的工具将直接 导入 ES 模块版本。