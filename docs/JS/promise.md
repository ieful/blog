---
slug: promise
title: promise
---

### 实现一个Promise

```js
class myPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        try {
            executor(this._resolve.bind(this), this._reject.bind(this))
        } catch (error) {
            this._reject(error)
        }
    }
    _resolve(data) {
        if (this.state === 'pending') {
            this.state = 'fulfiled';
            this.value = data;
        }
    }
    
    _reject(reason) {
        if (this.state === 'pending') {
            this.state = 'rejected';
            this.value = reason;
        }
    }
    then() {}
}
```