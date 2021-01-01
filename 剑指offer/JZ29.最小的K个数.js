function GetLeastNumbers_Solution(input, k)
{
    // write code here
    if(input.length < k) return [];
    input.sort((a, b) => a - b);
    return input.slice(0, k);
    
}