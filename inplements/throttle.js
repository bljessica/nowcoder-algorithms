function throttle(func, wait, mustRunTime) {
    let timer;
    let start = new Date();
    return function() {
        clearTimeout(timer);
        let that = this, args = arguments;
        let cur = new Date();
        if((cur - start) >= mustRunTime) {
            func.apply(that, args);
            start = cur;
        }
        else {
            timer = setTimeout(func, wait);
        }
    }
}