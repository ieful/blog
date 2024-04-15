/**
 * 数组去重
 * @type {[string,null,null,undefined,{},{name: string},{name: string},{title: string},{name: undefined},null]}
 */
const arr = [
    'null',
    null,
    null,
    undefined,
    {},
    {name: 'xiaoyu'},
    {name: 'xiaoyu'},
    {title: 'xiaoyu'},
    {name: undefined},
    {}
];


// 工具函数
function isEqual(o1, o2) {
    if ((typeof o1 === 'object' && o1 !== null) && (typeof o2 === 'object' && o2 !== null)) {
        let keys1 = Object.keys(o1);
        let keys2 = Object.keys(o2);

        if (keys1.length === 0 && keys2.length === 0) {
            return true;
        }
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (let key of keys1) {
            if (!o2.hasOwnProperty(key) || o2[key] !== o1[key]) {
                return false
            }
        }
        return true;
    }
    return o1 === o2;
}

// 主函数
function main(sourceArr) {
    let result = [];
    for (let i = 0; i < sourceArr.length; i++) {
        if (typeof sourceArr[i] === 'object' && sourceArr[i] !== null) {
            if (!result.find(item => isEqual(item, sourceArr[i]))) {
                result.push(sourceArr[i])
            }
        } else {
            !result.includes(sourceArr[i]) && result.push(sourceArr[i])
        }
    }
    return result;
}

// console.log(main(arr));

/**
 * this 指针
 */

var length = 10;
var obj1 = {
    length: 6,
    method: function () {
        console.log(this.length)
    }
}

var obj2 = {
    length: 3,
    method: function (fn) {
        fn();
        arguments[0]();
    }
}

// obj2.method(obj1.method, obj2.method); // 求打印输出结果


var a = 10;
function test() {
    // var a;
    console.log(a);
    a = 100;
    console.log(this.a);

    console.log(a);
}

test();