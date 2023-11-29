
// 通过path路径获取对象值，类似lodash的get方法

// var object = { 'a': [{ 'b': { 'c': 3 } }] };

// _.get(object, 'a[0].b.c');
// => 3
function get(object, path) {
    let temp = path.split('.');
    return temp.reduce((pre, next) => object[pre][next]);
}


// 手写React一个简单的累加器 + 定时累加




<div onClick="addCount">{num}</div>

function Demo() {}

let {num, setNum} = useState(0);

function addCount() {
    setNum(num + 1);
}

function addCountInterval() {
    let interval = setInterval(() => {
        addCount();
    }, 1000)
}