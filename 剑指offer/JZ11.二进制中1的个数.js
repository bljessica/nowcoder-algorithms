function NumberOf1(n)
{
    // write code here
    let res = 0;
    while(n !== 0) {
        res++;
        n = n & (n - 1);
    }
    return res;
}