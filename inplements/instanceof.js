function myInstanceof(obj, constructor) {
    if(typeof obj !== 'object') {
        throw 'obj should be an object';
    }
    if(typeof constructor !== 'function') {
        throw 'constructor should be a function';
    }
    let prototype = obj.__proto__;
    while(prototype) {
        if(prototype !== constructor.prototype) {
            prototype = prototype.__proto__;
        }
        else {
            return true;
        }
        if(prototype == null) return false;
    }
}