function StrToInt(str)
{
    // write code here
    if(str == null || str.length === 0) return 0;
    let res = 0;
    //负数
    if(str[0] === '-') {
        for(let i = 1; i < str.length; i++) {
            if(str[i] >= 'a' && str[i] <= 'z') return 0;
            res = res * 10 + parseInt(str[i]);
        }
        if(res < 0) return 0;
        res *= -1;
    }
    //正数
    else {
        if(str[0] === '+') 
            str = str.substr(1);
        for(let i = 0; i < str.length; i++) {
            if(str[i] >= 'a' && str[i] <= 'z') return 0;
            res = res * 10 + parseInt(str[i]);
        }
        if(res < 0) return 0;
    }
    return res;
}