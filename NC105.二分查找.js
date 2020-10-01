/**
 * 二分查找
 * @param n int整型 数组长度
 * @param v int整型 查找值
 * @param a int整型一维数组 有序数组
 * @return int整型
 */
function upper_bound_( n ,  v ,  a ) {
    // write code here
    if(v > a[n - 1]) {
        return n + 1;
    }
    let left = 0, right = n - 1;
    while(left < right) {
        let mid = Math.floor((left + right) / 2);
        if(a[mid] < v) {
            left = mid + 1;
        }
        else {
            right = mid
        }
    }
    return left + 1;
}

module.exports = {
    upper_bound_ : upper_bound_
};