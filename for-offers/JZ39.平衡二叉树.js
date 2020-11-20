/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot)
{
    // write code here
    if(!pRoot) return true;
    function dfs(root, depth) {
        if(!root) return depth;
        return Math.max(dfs(root.left, depth + 1), dfs(root.right, depth + 1));
    }
    if(Math.abs(dfs(pRoot.left, 0) - dfs(pRoot.right, 0)) > 1) return false;
    return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);
}