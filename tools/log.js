// 一个日志调试工具函数

function log(content, name) {
    const str = type => {
        return `---------- ${name} ${type ? 'start' : 'end'} ----------`
    }
    console.log(str(1))
    console.log(content)
    console.log(str(0))
}

let test = {
    name: 'xiaoyu',
    age: 30
}


log(test, 'test');

// 输出清晰：

// ---------- test start ----------
//     { name: 'xiaoyu', age: 30 }
// ---------- test end ----------
