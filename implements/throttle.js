function throttle(func, wait) {
    let start = new Date();
    return function() {
        let that = this, args = arguments;
        let cur = new Date();
        if(cur - start >= wait) {
            func.apply(that, args);
            start = cur;
        }
    }
}