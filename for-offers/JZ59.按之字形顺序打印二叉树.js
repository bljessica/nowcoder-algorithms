/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    // write code here
    if(!pRoot) return [];
    let res = [], queue = [];
    queue.push(pRoot);
    let toRight = true;
    while(queue.length > 0) {
        let len = queue.length, tmp = [];
        for(let i = 0; i < len; i++) {
            let node = queue.shift();
            if(toRight) tmp.push(node.val);
            else tmp.unshift(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        toRight = !toRight;
        res.push(tmp);
    }
    return res;
}
module.exports = {
    Print : Print
};