
let nums = [-2, 1, 3, 4, -1, 2, 5];

function sumUtil(args) {
    console.log('args', args)
    let sum = [...args].reduce((pre, next) => next + pre)
    console.log('sum is', sum)
    return sum;
}


let len = nums.length;
let result = [];
for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
        console.log('j is', j)
        result.push(sumUtil(nums.slice(i,j)))
    }
}

console.log(Math.max(...result));

["((()))' '()(())",")0)()"]
