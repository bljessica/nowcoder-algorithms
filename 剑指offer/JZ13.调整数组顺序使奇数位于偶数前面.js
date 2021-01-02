function reOrderArray(array)
{
    // write code here
    // 1
    // let arr1 = [], arr2 = [];
    // for(let item of array) {
    //     if(item % 2 === 1) arr1.push(item);
    //     else arr2.push(item);
    // }
    // return arr1.concat(arr2);

    // 2
    const len = array.length
    for(let i = len - 1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if (array[j] % 2 === 0 && array[j + 1] % 2 === 1) {
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
        }
    }
    return array
}