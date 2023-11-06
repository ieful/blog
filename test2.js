// function myDeepClone(obj) {
//     let result
//     let temp = [];
//     if (typeof obj !== 'object' || obj === null) {
//         return obj
//     }
//     if (Array.isArray(obj)) {
//         result = []
//     } else {
//         result = {}
//     }
//     for (key in obj) {
//         result[key] = myDeepClone(obj[key]);
//     }
//     return result;
// }



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


new Promise((resolve) => {
    console.log('new promise');
    resolve();
}).then(() => {
    console.log('async2 end');
}).then(() => {
    console.log('async1 end');
})