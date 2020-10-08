/**
 * 
 * @param arr int整型一维数组 the array
 * @return int整型
 */
function maxLength( arr ) {
    // write code here
    let start = 0, end = 0, res = 0;
    let map = new Map();
    while(end < arr.length) {
        //重复
        if(map.get(arr[end]) >= start) {
            start = map.get(arr[end]) + 1;
            map.set(arr[end], end);
        }
        //未重复
        else {
            map.set(arr[end], end);
            res = Math.max(res, end - start + 1);
        }
        end++;
    }
    return res;
}

module.exports = {
    maxLength : maxLength
};