/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    // write code here
    if(pre.length === 0) return null;
    let root = new TreeNode(pre[0]); //要创建节点
    let rootIdx = vin.indexOf(root.val);
    root.left = reConstructBinaryTree(pre.slice(1, rootIdx + 1), vin.slice(0, rootIdx));
    root.right = reConstructBinaryTree(pre.slice(rootIdx + 1), vin.slice(rootIdx + 1));
    return root;
}