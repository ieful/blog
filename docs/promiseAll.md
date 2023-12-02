---
title: 实现一个promise.all
---


```javascript
    function myPromiseAll(promiseArr) {
    if (!Array.isArray(promiseArr)) {
        throw new Error('参数需要为一个promise数组')
    }
    return new Promise((resolve, reject) => {
        let result = [];
        let resolveCount = 0;
        for (let i = 0; i < promiseArr.length; i++) {
            promiseArr[i].then((res) => {
                result[i] = res; // 保证输出顺序与输入顺序一致
                resolveCount += 1;
                if (resolveCount === promiseArr.length) {
                    resolve(result);
                }
            }, err => {
                reject(err)
            })
        }
    })
}
```