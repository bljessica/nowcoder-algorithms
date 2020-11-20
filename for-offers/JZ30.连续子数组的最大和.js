function FindGreatestSumOfSubArray(array)
{
    // write code here
    if(array.length === 0) return 0;
    let res = Number.MIN_SAFE_INTEGER, sum = 0;
    for(let i = 0; i < array.length; i++) {
        if(sum >= 0) sum += array[i];
        else sum = array[i];
        res = Math.max(res, sum);
    }
//     暴力
//     for(let i = 0; i < array.length; i++) {
//         let tmp = array[i];
//         if(tmp > res) res = tmp;
//         for(let j = i + 1; j < array.length; j++) {
//             tmp += array[j];
//             if(tmp > res) res = tmp;
//         }
//     }
    return res;
}