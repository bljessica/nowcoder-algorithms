function FindNumbersWithSum(array, sum)
{
    // write code here
    let res = [];
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(array[i] + array[j] === sum) {
                if(res.length === 0) 
                    res = [array[i], array[j]];
                else {
                    if(array[i] * array[j] < res[0] * res[j]) 
                        res = [array[i], array[j]];
                }
            }
        }
    }
    return res;
}