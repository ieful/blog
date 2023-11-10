
// 调度器
class Test {
    constructor() {
        this.taskArr = [];
    }
    push (task) {
        this.taskArr.push(task);
    }
    doFetch () {
        main(maxRequst, this.taskArr)
    }
}

let test = new Test()

// 并发控制
let task = [1,2,3,4,5,6]
function main(maxRequst, taskArr) {
    return new Promise((resolve, reject) => {
        let curr = 0;
        let result = [];
        async function doReq() {
            let i = curr;
            result[i] = await fetch(taskArr[i]);
            curr += 1;
            if (curr === taskArr.length) {
                resolve(result);
            } else {
                doReq();
            }
        }
        // 触发
        for (let i = 0; i < maxRequst; i++) {
            doReq();
        }
    })
}