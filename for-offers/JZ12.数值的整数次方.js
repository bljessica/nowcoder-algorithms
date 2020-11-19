function Power(base, exponent)
{
    // write code here
    if(exponent === 0) return 1;
    let res = base;
    //正数次幂
    if(exponent > 0) {
        for(let i = 1; i < exponent; i++) {
            res *= base;
        }
    }
    else {
        res = 1;
        for(let i = 0; i < -exponent; i++) {
            res /= base;
        }
    }
    return res;
}