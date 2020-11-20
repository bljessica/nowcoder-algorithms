function Add(num1, num2)
{
    // write code here
    while(num2) {
        let tmp = num1 ^ num2;//不进位的相加
        num2 = (num1 & num2) << 1;//进位
        num1 = tmp;
    }
    return num1;
}