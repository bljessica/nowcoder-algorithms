function rectCover(number)
{
    // write code here
    if(number === 1 || number === 2) return number;
    let a1 = 1, a2 = 2;
    let res = 0;
    for(let i = 3; i <= number; i++) {
        res = a1 + a2;
        a1 = a2;
        a2 = res;
    }
    return res;
}