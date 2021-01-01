function Sum_Solution(n)
{
    // write code here
    let tmp = n > 1 && (n += Sum_Solution(n - 1));
    return n;
}