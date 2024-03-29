---
slug: preload
title: prefetch和preload
---


```html
<link rel="preload" href="style.css" as="style" />
<link rel="preload" href="main.js" as="script" />
```


优先级：preload > prefetch。

:::info
preload是立即请求当前页面会用到的资源，并缓存起来（不执行），prefetch是告诉浏览器在你空闲的时候去下载我后面的页面可能会用到的资源，
以提高 后续页面的打开速度（同样是下载后不执行）。 正常情况下不用preload，单纯用 link 加载css资源或者用 script 加载js资源的话，
都是页面解析到对应的标签后才会发起请求， 但是如果使用 preload就不必等到解析到标签才发起，而是更快的发起请求同时不阻塞dom的解析渲染
:::