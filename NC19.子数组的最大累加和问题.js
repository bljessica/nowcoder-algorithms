/**
 * max sum of the subarray
 * @param arr int整型一维数组 the array
 * @return int整型
 */
function maxsumofSubarray( arr ) {
    // write code here
    let max = 0;
    //从容器第二个元素开始遍历，判断当前数与前一个数之和与当前数之间哪个较大，
    //把大的数赋值给当前位置，遍历一遍之后最大累计和就在容器末尾，以此分而治之
    for(let i = 1; i < arr.length; i++) {
        arr[i] = Math.max(arr[i], arr[i] + arr[i - 1]);
        max = Math.max(arr[i], max);
    }
    return max;
}

module.exports = {
    maxsumofSubarray : maxsumofSubarray
};