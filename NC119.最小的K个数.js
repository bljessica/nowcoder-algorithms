function GetLeastNumbers_Solution(input, k)
{
    // write code here
    input.sort((a, b) => {
        return a - b;
    });
    let res = [];
    if(k < input.length) {
        for(let i = 0; i < k; i++) {
            res.push(input[i]);
        }
        return res;
    }
    else if(k == input.length) {
        return input.slice(0);
    }
    else {
        return [];
    }
}

module.exports = {
    GetLeastNumbers_Solution : GetLeastNumbers_Solution
};