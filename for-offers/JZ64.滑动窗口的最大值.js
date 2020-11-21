function maxInWindows(num, size)
{
    // write code here
    if(size === 0) return [];
    let res = [];
    for(let i = 0; i < num.length - size + 1; i++) {
        res.push(Math.max(...num.slice(i, i + size)));
    }
    return res;
}
module.exports = {
    maxInWindows : maxInWindows
};