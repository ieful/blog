---
slug: BFC
title: 块级格式化上下文
---

BFC:块级格式化上下文指的一个独立的渲染区域，有着自己的渲染规则，内部的元素不会和外部相互影响。比如，最常见的问题就是通过触发
BFC来规避垂直方向上的外边距合并。

:::Tip
触发BFC的几种方式
1、display: inline-block
2、overflow 不等于 visible
3、position absolute fixed
4、设置float
:::