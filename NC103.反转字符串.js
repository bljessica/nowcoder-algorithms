/**
 * 反转字符串
 * @param str string字符串 
 * @return string字符串
 */
function solve( str ) {
    // write code here
    return str.split('').reverse().join('');
}

module.exports = {
    solve : solve
};