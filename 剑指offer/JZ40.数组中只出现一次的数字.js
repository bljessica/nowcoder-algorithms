function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    let res = [];
    for(let item of array) {
        if(array.indexOf(item) === array.lastIndexOf(item)) 
            res.push(item);
    }
    return res;
}