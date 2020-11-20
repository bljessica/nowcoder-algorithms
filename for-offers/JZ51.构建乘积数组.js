function multiply(array)
{
    // write code here
    if(array.length <= 1) return null;
    let arr = [];
    for(let i = 0; i < array.length; i++) {
        let tmp = 1;
        for(let j = 0; j < array.length; j++) {
            if(j === i) continue;
            tmp *= array[j];
        }
        arr.push(tmp);
    }
    return arr;
}
module.exports = {
    multiply : multiply
};