const arr = [
    'null',
    null,
    null,
    undefined,
    {},
    {name: 'ImeanAi'},
    {name: 'ImeanAi'},
    {title: 'ImeanAi'},
    {name: undefined},
    {}
];

const uniqueArr = ['null', null, undefined, {name: 'ImeanAi'}, {title: 'ImeanAi'}, {name: undefined}, {}];

function sameObj(obj1, obj2) {
    console.log('obj1 is', obj1);
    console.log('obj2 is', obj2);
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);
    if (key1.length !== key2.length) {
        return false;
    }
    for (let key of key1) {
        if (obj2[key] !== obj1[key]) {
            return false;
        }
    }
    return true;
}


function main(sourceArr) {
    let result = [];
    for (let i = 0; i < sourceArr.length; i++) {
        if (typeof sourceArr[i] === 'object' && sourceArr[i] !== null) {
            if (result.length > 0) {
                console.log('result is', result);
                if (!result.find(item => sameObj(item, sourceArr[i]))) {
                    result.push(sourceArr[i])
                }
            } else {
                result.push(sourceArr[i])
            }
        } else if (sourceArr[i] === null) {
            if (!result.includes(null)) {
                result.push(sourceArr[i])
            }
        } else {
            if (!result.includes(sourceArr[i])) {
                result.push(sourceArr[i])
            }
        }
    }
    return result;
}

console.log(main(arr));


// console.log(main(arr));