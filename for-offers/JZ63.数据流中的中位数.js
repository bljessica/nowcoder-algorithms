let arr = [];

function Insert(num)
{
    // write code here
    arr.push(num);
}
function GetMedian(){
	// write code here
    let tmp = arr.slice();
    tmp.sort((a, b) => a - b);
    let len = tmp.length;
    if(len === 1) return arr[0]
    if(len % 2 === 0) return (tmp[Math.floor(len / 2)] + tmp[Math.floor(len / 2) - 1]) / 2;
    return tmp[(len - 1) / 2];
}
module.exports = {
    Insert : Insert,
    GetMedian : GetMedian
};