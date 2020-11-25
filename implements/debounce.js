function debounce(func, wait) {
    let timer;
    return function() {
        clearTimeout(timer);
        setTimeout(func, wait);
    }
}