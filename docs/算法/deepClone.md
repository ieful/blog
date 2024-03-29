---
slug: deepClone
title: deepClone
---



```javascript
function myDeepClone(sourceObj) {
    let result;
    if (typeof sourceObj !== 'object' || sourceObj === null) {
        // 如果是基本类型: string、boolean、number或者null 就直接返回本身
        return sourceObj;
    }
    result = Array.isArray(sourceObj) ? [] : {};
    for (let key in sourceObj) {
        result[key] = myDeepClone(sourceObj[key]) // 递归复制
    }
    return result
}
```