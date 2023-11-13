// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
//
// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
//
// 输入：n = 1
// 输出：["()"]
//
// 1 <= n <= 8

function main(n) {
    let result = [];
    toolFn('', result, n, n);
    return result;
}
function toolFn(substr, resArr, left, right) {
    if (left === 0 && right === 0) {
        resArr.push(substr)
    }

    if (left > 0) {
        toolFn(substr + '(', resArr, left - 1, right);
    }
    if (right > left) {
        toolFn(substr + ')', resArr, left, right - 1);
    }
}

console.log(main(3))

