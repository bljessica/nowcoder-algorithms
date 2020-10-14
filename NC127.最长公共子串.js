/**
 * longest common substring
 * @param str1 string字符串 the string
 * @param str2 string字符串 the string
 * @return string字符串
 */
function LCS( str1 ,  str2 ) {
    // write code here
    if(!str1 || !str2) {
        return '-1';
    }
    //让短串为str1
    if(str1.length > str2.length) {
        [str1, str2] = [str2, str1];
    }
    let maxLen = 0, res = '';
    for(let i = 0; i < str1.length; i++) {
        if(str2.indexOf(str1.slice(i - maxLen, i + 1)) != -1) {
            res = str1.slice(i - maxLen, i + 1);
            maxLen += 1;
        }
    }
    return res || '-1';
//     if(str1 == null || str2 == null || str1.length == 0 || str2.length == 0) {
//         return '-1';
//     }
//     let m = str1.length, n = str2.length;
//     let dp = new Array(m);
//     //初始化dp二维数组
//     for(let i = 0; i < m; i++) {
//         dp[i] = new Array(n);
//         for(let j = 0; j < n; j++) {
//             dp[i][j] = 0;
//         }
//     }
//     let endIndex = 0, maxLen = 0;
//     //动态规划
//     for(let i = 0; i < m; i++) {
//         for(let j = 0; j < n; j++) {
//             if(str1[i] == str2[j]) {
//                 if(i == 0 || j == 0) {
//                     dp[i][j] = 1;
//                 }
//                 else {
//                     dp[i][j] = 1 + dp[i - 1][j - 1];
//                 }
//             }
//             //else {
//              //   dp[i][j] = 0;
//             //}
//             if(dp[i][j] > maxLen) {
//                 endIndex = i;
//                 maxLen = dp[i][j];
//             }
//         }
//     }
//     if(maxLen == 0) {
//         return '-1';
//     }
//     return str1.substring(endIndex - maxLen + 1, endIndex + 1);
}

module.exports = {
    LCS : LCS
};