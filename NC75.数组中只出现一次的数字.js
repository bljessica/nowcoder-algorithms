function FindNumsAppearOnce(array)
{
    // write code here
    let num1 = 0, num2 = 0;
    let xor = 0; //那两个数异或的结果
    for(let i of array) {
        xor ^= i;
    }
    let index = xor & (-xor);//两个数第一个不相同的二进制位的位置
    //分组进行异或
    for(let i of array) {
        if(i & index) {
            num1 ^= i;
        }
        else {
            num2 ^= i;
        }
    }
    return [num1, num2];
}

module.exports = {
    FindNumsAppearOnce : FindNumsAppearOnce
};