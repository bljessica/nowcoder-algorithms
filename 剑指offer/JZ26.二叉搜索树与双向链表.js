/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree)
{
    // write code here
    if(!pRootOfTree) return null;
    let pre = null, head = null;
    function inOrder(node) {
        if(!node) return;
        inOrder(node.left);
        if(pre == null) {
            pre = node;
            head = node;
        }
        else {
            node.left = pre;
            pre.right = node;
            pre = node;
        }
        inOrder(node.right);
    }
    inOrder(pRootOfTree);
    return head;
}
module.exports = {
    Convert : Convert
};