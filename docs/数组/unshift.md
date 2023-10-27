---
slug: unshift
title: unshift
---

### 插入元素到数组的首位


```javascript
let numArr = [0,1,2,3,4,5,6];
// 假如要把 -1 插入到数组的首位

for (let i = numArr.length; i >= 0; i--) {
    numArr[i] = numArr[i - 1];
}
numArr[0] = -1;
```