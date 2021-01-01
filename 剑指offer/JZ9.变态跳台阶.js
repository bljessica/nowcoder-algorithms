function jumpFloorII(number)
{
    // write code here
    if(number === 0 || number === 1) return number;
    let res = 1;
    for(let i = 2; i <= number; i++) {
        res *= 2;
    }
    return res;
}