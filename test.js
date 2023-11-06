
let timers = [];
let i = 0;

export function mySetInterval(callback, t) {
let j = i;

    function main(j) {
        timers[j] = setTimeout(() => {
            callback();
            main(++i);
        }, t)
    }

    main(j);
    return j;
}

// 提示：使用clearTimeout
export function myClearInterval(timer) {
    if (timers[timer]) {
        clearTimeout(timers[timer])
    }
}

//
使用 setTimeout, clearTimeout 实现  mySetInterval， myClearInterval
在 write code here 注释处编写代码

type Timer = number;

// 使用setTimeout实现setInterval
// write code here

let timers = [];
let i = 0;

export function mySetInterval(callback, t) {
    let j = i;
    function main() {
        timers[j] = setTimeout(() => {
            callback();
            main();
        }, t)
    }
    main();
    ++i;
    return j;
}

// 提示：使用clearTimeout
export function myClearInterval(timer: Timer) {
    if (timers[timer]) {
        clearTimeout(timers[timer])
    }
}

// mySetInterval(callback, t)

// 测试用例
describe('test mySetTimeout', () => {
    it('用例1: 功能case', function (done) {
        let count = 0;

        const timer = mySetInterval(() => {
            count++;
        }, 100);

        setTimeout(() => {
            expect(count).toBe(2);

            myClearInterval(timer);

        }, 250);

        setTimeout(() => {
            expect(count).toBe(2);
            done();
        }, 350);

    });

    it('用例2: mySetInterval 允许多次调用', function (done) {

        let count = 0;

        // 同时设置两个计时器
        const timer1 = mySetInterval(() => {
            count++;
        }, 100);


        const timer2 = mySetInterval(() => {
            count++;
        }, 100);


        // 250ms之后，count被累加了四次，清除计时器timer1
        setTimeout(() => {
            expect(count).toBe(4);
            myClearInterval(timer1);

        }, 250);

        // 350ms之后，只存在timer2, count累加一次，清除计时器timer2
        setTimeout(() => {
            expect(count).toBe(5);
            done();
            myClearInterval(timer2);
        }, 350);

        // count 数据不变化
        setTimeout(() => {
            expect(count).toBe(5);
            done();
        }, 450);

    });
});



// 翻转单链表
// 思路就是用中间值不断的轮换
function reverseList(head) {
    if (!head.next) {
        return head
    }
    let pre = null;
    let curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }
    return pre
}


async function sleep() {
    await new Promise(() => {

    })
}


