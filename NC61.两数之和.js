/**
  * 
  * @param numbers int整型一维数组 
  * @param target int整型 
  * @return int整型一维数组
  */
 function twoSum( numbers ,  target ) {
    // write code here
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] == target) {
                return [i + 1, j + 1];
            }
        }
    }
    return [];
}

module.exports = {
    twoSum : twoSum
};