let s1 = [], s2 = [];

function push(node)
{
    // write code here
    s1.push(node);
}
function pop()
{
    // write code here
    if(s2.length > 0) return s2.pop();
    while(s1.length > 0) 
        s2.push(s1.pop());
    return s2.pop();
}
module.exports = {
    push : push,
    pop : pop
};