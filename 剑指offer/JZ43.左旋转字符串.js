function LeftRotateString(str, n)
{
    // write code here
    if(!str || str.length === 0) return '';
    if(n >= str.length) n = n % str.length;
    return str.substring(n, str.length) + str.substring(0, n);
}
module.exports = {
    LeftRotateString : LeftRotateString
};