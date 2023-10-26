---
slug: promise
title: promise
---

### 实现一个Promise

```javascript

class myPromise {
    const Pending = 'pending';
    const Fulfilled = 'fulfilled';
    const Rejected = 'rejected';
    constructor(func) {
        func(this.resolve, this.reject);
    }
    
    resolve() {
        if (this.status === 'pending') {
            this.status = fulfilled;
        }
    }
    reject() {
        if (this.status === 'pending') {
            this.status = rejected;
        }
    }
}
```