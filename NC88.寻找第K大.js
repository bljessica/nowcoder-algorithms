/**
 * 
 * @param a int整型一维数组 
 * @param n int整型 
 * @param K int整型 
 * @return int整型
 */
function findKth( a ,  n ,  K ) {
    // write code here
    a.sort((m, n) => {
        return n - m;
    });
    return a[K - 1];
}

module.exports = {
    findKth : findKth
};