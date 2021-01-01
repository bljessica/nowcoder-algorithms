function FindContinuousSequence(sum)
{
    // write code here
    if(sum == null || sum <= 0) return null;
    let res = [];
    for(let i = 1; i < sum; i++) {
        let num = i, tmpSum = 0, tmp = [];
        while(tmpSum < sum && num < sum) {
            tmpSum += num;
            tmp.push(num++);
        }
        if(tmpSum === sum) res.push(tmp);
    }
    return res;
}