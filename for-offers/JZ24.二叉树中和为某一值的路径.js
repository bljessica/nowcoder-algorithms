/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
    // write code here
    let res = [], path = [];
    function isPath(root, expectNumber) {
        if(!root) return;
        path.push(root.val);
        if(!root.left && !root.right && root.val === expectNumber) {
            res.push(path.slice());
        }
        if(root.left) isPath(root.left, expectNumber - root.val);
        if(root.right) isPath(root.right, expectNumber - root.val);
        path.pop();
    }
    isPath(root, expectNumber);
    return res;
}