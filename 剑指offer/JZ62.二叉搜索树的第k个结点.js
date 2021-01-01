/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k)
{
    // write code here
    if(!pRoot) return null;
    let arr = [], queue = [pRoot];
    while(queue.length) {
        let len = queue.length;
        for(let i = 0; i < len; i++) {
            let node = queue.shift();
            arr.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    if(k > arr.length) return null;
    return arr.sort((a, b) => a.val - b.val)[k - 1];
}
module.exports = {
    KthNode : KthNode
};