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