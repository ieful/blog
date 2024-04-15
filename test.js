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

console.log(main(arr));