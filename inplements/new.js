function myNew(Parent, ...rest) {
    let child = Object.create(Parent.prototype);
    let result = Parent.apply(child, rest);
    //如果构造器没有手动返回对象，则返回第一步的对象
    return typeof result === 'object'? result: child;
}