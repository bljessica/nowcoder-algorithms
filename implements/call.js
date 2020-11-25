function myCall(context) {
    if(typeof context === 'undefined' || context === 'null') {
        context = window;
    }
    context.fn = this;
    let args = [...arguments].slice(1);
    let result = context.fn(...args);
    delete context.fn;
    return result;
}