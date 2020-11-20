/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot)
{
    // write code here
    function dfs(root, depth) {
        if(!root) return depth;
        return Math.max(dfs(root.left, depth + 1), dfs(root.right, depth + 1))
    }
    return dfs(pRoot, 0);
}