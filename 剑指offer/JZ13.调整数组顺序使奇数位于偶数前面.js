function reOrderArray(array)
{
    // write code here
    let arr1 = [], arr2 = [];
    for(let item of array) {
        if(item % 2 === 1) arr1.push(item);
        else arr2.push(item);
    }
    return arr1.concat(arr2);
}