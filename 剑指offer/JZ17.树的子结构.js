/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if(!pRoot1 || !pRoot2) return false;
    function same(root1, root2) {
        if(!root2) return true; //只要root2为空就为true
        if(!root1) return false;
        return root1.val === root2.val && same(root1.left, root2.left) && same(root1.right, root2.right);
    }
    return same(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2);
}