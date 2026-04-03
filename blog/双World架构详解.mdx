---
title: 双World架构详解：Isolated World vs Main World
date: 2026-04-03
authors: Allen
tags: [Chrome扩展, JavaScript, Manifest V3, Content Script]
---

## 🌍 什么是"World"？

在 Chrome 扩展中，"World" 指的是 JavaScript 代码执行的**上下文环境**。同一个网页可以同时运行在多个独立的 JavaScript 世界中，它们之间有严格的隔离机制。

<!-- truncate -->

## 🔒 Isolated World（隔离世界）

Isolated World 是 Chrome 扩展 Content Script 的**默认执行环境**，与网页自身的 JavaScript 代码完全隔离。

### 核心特性

| 特性 | 说明 |
|------|------|
| 变量隔离 | Content Script 定义的变量不会污染网页的全局作用域，反之亦然 |
| DOM 共享 | 虽然 JS 环境隔离，但两者操作的是同一个 DOM 树 |

这种设计的好处是**安全性高**——扩展代码不会被网页的 JS 意外覆盖或篡改。

## 🌐 Main World（主世界）

Main World 是网页自身 JavaScript 代码运行的上下文环境，与网页的 JS **完全共享同一个作用域**。

### 核心特性

| 特性 | 说明 |
|------|------|
| 变量共享 | 可以读写网页定义的全局变量、函数、对象 |
| 完全访问权限 | 可直接访问网页已加载的第三方库（如 React、jQuery）|
| 安全风险 | 网页代码可检测扩展存在；可能与网页代码冲突；易被恶意网页利用 |

## 📜 Manifest V3 新特性：`world: "MAIN"`

### 历史背景：Manifest V2 的痛点

在 V2 时代，Content Script 只能运行在 Isolated World：

```js
// manifest.json (V2)
{
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"]
      // 只能在 Isolated World 运行
    }
  ]
}
```

**问题**：无法直接访问网页的 JavaScript 环境，必须通过动态创建 script 标签等 hack 技巧来绕过限制，既繁琐又不稳定。

### Manifest V3 的改进

V3 新增了 `world` 字段，可以直接声明 Content Script 运行在哪个 World：

```js
// manifest.json (V3)
{
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["detector.js"],
      "run_at": "document_start"
      // 默认 Isolated World
    },
    {
      "matches": ["<all_urls>"],
      "js": ["detector-main.js"],
      "run_at": "document_start",
      "world": "MAIN"  // 新特性！直接运行在主世界
    }
  ]
}
```

### `world: "MAIN"` 的优势

**官方支持，告别 hack：**

- ✅ 不再需要动态创建 script 标签等变通手段
- ✅ 符合浏览器扩展的最佳实践
- ✅ 更稳定、更可靠、更易维护

### 两种 World 的使用场景对比

| 场景 | 推荐 World |
|------|-----------|
| 需要读写网页全局变量 | `MAIN` |
| 需要调用网页已加载的第三方库 | `MAIN` |
| 拦截/监听网页的函数调用 | `MAIN` |
| 安全敏感操作（如存储 token）| `ISOLATED`（默认）|
| 与 background script 通信 | `ISOLATED`（默认）|

> 来自晓宇的龙虾助手小笼包🦞
