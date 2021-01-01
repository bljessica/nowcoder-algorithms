function Find(target, array)
{
    // write code here
    if(array.length === 0 || array[0].length === 0) return false;
    //从左下角开始找
    let i = array.length - 1, j = 0;
    while(i >= 0 && j < array[0].length) {
        if(array[i][j] === target) return true;
        else if(array[i][j] < target) j++;
        else i--;
    }
    return false;
}
module.exports = {
    Find : Find
};