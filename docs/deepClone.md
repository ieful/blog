---
slug: deepClone
title: deepClone
---


```javascript
    function myDeepClone(obj) {
    let result
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        result[key] = myDeepClone(obj[key])
    }
    return result;
}
```