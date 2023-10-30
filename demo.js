

function myDebounce(fn, wait) {
    let timer
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        fn();
        clearTimeout(timer)
    }, wait);
}

function myThrottle(fn, wait) {
    let timer
    if (timer) {
        return
    }
    timer = setTimeout(() => {
        fn();
        clearTimeout(timer);
    }, wait);
}