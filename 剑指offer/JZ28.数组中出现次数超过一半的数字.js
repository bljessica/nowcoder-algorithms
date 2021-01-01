function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    if(numbers.length === 0) return 0;
    let candidate = -1, num = 0;
    for(let item of numbers) {
        if(item !== candidate) {
            num --;
        }
        else {
            num ++;
        }
        if(num < 0) {
            candidate = item;
            num = 1;
        }
    }
    let totalNum = 0;
    for(let item of numbers) {
        if(item === candidate) totalNum++;
    }
    if(totalNum > numbers.length / 2) return candidate;
    return 0;
}