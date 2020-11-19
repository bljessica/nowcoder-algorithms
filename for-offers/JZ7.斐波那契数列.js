function Fibonacci(n)
{
    // write code here
    if(n === 0 || n === 1) return n;
    let a1 = 0, a2 = 1, res = 0;
    let i = 1;
    while(i < n) {
        res = a1 + a2;
        a1 = a2;
        a2 = res;
        i++;
    }
    return res;
}
module.exports = {
    Fibonacci : Fibonacci
};