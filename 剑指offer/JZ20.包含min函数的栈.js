let s = [];
let minVal = Number.MAX_SAFE_INTEGER;

function push(node)
{
    // write code here
    s.push(node);
    if(node < minVal) {
        minVal = node;
    }
}
function pop()
{
    // write code here
    let tmp = s.pop();
    minVal = Number.MAX_SAFE_INTEGER;
    for(let item of s) {
        if(item < minVal) minVal = item;
    }
    return tmp;
}
function top()
{
    // write code here
    return s[s.length - 1];
}
function min()
{
    // write code here
    return minVal;
}