---
slug: concurrencyRequest
title: 并发请求控制
---


```javascript
function concurrencyRequest(urls, maxNum) {
    return new Promise((resolve, reject) => {
        let result = [];
        let index = 0;
        
        async function doRequest() {
            if (index === urls.length) {
                return;
            }
            let i = index;
            result[i] = await fetch(urls[i]);
            index++;
            if (index === urls.length) {
                resolve(result);
            } else {
                doRequest();
            }
        }
        for (let i = 0; i < urls.length; i++) {
            doRequest();
        }
    })
}
```

:::tip
思路：
1、首先函数整体要返回一个promise,所以函数体中先写 **return new Promise()**
2、在promise中是具体要执行的逻辑，也就是控制并发的代码，分两部分，一个是具体的发请求的函数，一个是发起第一批请求的循环
3、在promise中维护一个请求的队列，在具体的请求函数中每次都需要判断当前请求是否是最后一个请求，如果是就执行resolve,如果不是将下标加一，继续请求
4、promise一进来先执行一个for循环将最大并发填写，这类用for循环即可。
:::



