function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    for(let item of numbers) {
        if(numbers.indexOf(item) !== numbers.lastIndexOf(item)) {
            duplication[0] = item;
            return true;
        }
    }
    return false;
}
module.exports = {
    duplicate : duplicate
};