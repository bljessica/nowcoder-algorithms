function LastRemaining_Solution(n, m)
{
    // write code here
    if(n <= 0 || m === 0) return -1;
    let index = 0;
    for(let i = 2; i <= n; i++) {
        index = (index + m) % i;
    }
    return index;
}