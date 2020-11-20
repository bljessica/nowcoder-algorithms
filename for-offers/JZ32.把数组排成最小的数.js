function PrintMinNumber(numbers)
{
    // write code here
    function isLarge(m, n) {
        return (m + '' + n) > (n + '' + m);
    }
    let res = '';
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if(isLarge(numbers[i], numbers[j])) {
                let tmp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = tmp;
            }
        }
        res += '' + numbers[i];
    }
    return res;
}