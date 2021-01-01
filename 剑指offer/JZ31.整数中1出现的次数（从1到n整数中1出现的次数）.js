function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    let res = 0;
    for(let i = 1; i <= n; i++) {
        let str = i.toString();
        for(let i = 0; i < str.length; i++) {
            if(str[i] === '1') res += 1;
        }
    }
    return res;
}
module.exports = {
    NumberOf1Between1AndN_Solution : NumberOf1Between1AndN_Solution
};