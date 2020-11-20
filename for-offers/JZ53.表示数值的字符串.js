//s字符串
function isNumeric(s)
{
    // write code here
    //其他字符
//     for(let i = 0; i < s.length; i++) {
//         if(!((s[i] >= '0' && s[i] <= '9') || s[i] === 'e' || s[i] === 'E' || s[i] === '+' || s[i] === '-' || s[i] === '.')) {
//             return false;
//         }
//     }
//     let idx = s.indexOf('e') || s.indexOf('E');
//     if(idx === 0) return false;
//     else if(idx > 0) {
//         let dotIdx = s.indexOf('.');
//         if(dotIdx > idx) return false;
//     }
//     return true;
    return new RegExp(/^[\+-]?\d*\.?\d*\d*(e[\+-]?\d+)?$/i).test(s);
}
module.exports = {
    isNumeric : isNumeric
};