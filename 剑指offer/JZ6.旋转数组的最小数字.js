function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length === 0) return 0;
    for(let i = 1; i < rotateArray.length; i++) {
        if(rotateArray[i] < rotateArray[i - 1]) return rotateArray[i];
    }
    return rotateArray[0]; //全部相等
}
module.exports = {
    minNumberInRotateArray : minNumberInRotateArray
};