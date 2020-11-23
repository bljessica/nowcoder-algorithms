function deepClone(obj) {
    let newObj = obj instanceof Array? []: {};
    for(let key of obj) {
        let tmp = obj[key] === 'object'? deepClone(obj[key]): obj[key];
        newObj[key] = tmp;
    }
    return newObj;
}