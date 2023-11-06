---
slug: tools
title: 一些工具函数
---


```javascript
// 1、眠函数
function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time)
    })
}
// 使用
async function main() {
    console.log(1);
    await sleep(2000);
    console.log(2); // 两秒之后输出 2
}


// 2、事件循环面试题
    async function async1() {
        console.log('async1 start');
        await async2();
        console.log('async1 end');
    }
    
    async function async2() {
        new Promise((resolve) => {
            console.log('new promise');
            resolve();
        }).then(() => {
            console.log('async2 end');
        })
    }
    
    setTimeout(() => {
        console.log('settimeout');
    },0)
    
    console.log('script start');
    
    async1();
    
    new Promise((resolve) => {
        console.log('promise2');
        resolve();
    }).then(() => {
        console.log('pormise4')
    })
    
    console.log('script end');
// 3、 useMemo 和 useCallback


```