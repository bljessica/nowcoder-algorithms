function IsContinuous(numbers)
{
    // write code here
    if(numbers.length < 5) return false;
    let arr = numbers.filter(n => n !== 0);
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    if(max - min > 4) return false;
    //重复
    for(let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) !== i) return false;
    }
    return true;
}