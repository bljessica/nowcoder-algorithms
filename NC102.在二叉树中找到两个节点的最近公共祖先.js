/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 * 
 * @param root TreeNode类 
 * @param o1 int整型 
 * @param o2 int整型 
 * @return int整型
 */
function lowestCommonAncestor( root ,  o1 ,  o2 ) {
    // write code here
    return commonAncestor(root, o1, o2).val;
}

function commonAncestor(root, o1, o2) {
    //超过叶子节点，或者找到了o1, o2
    if(root == null || root.val == o1 || root.val == o2) {
        return root;
    }
    let left = commonAncestor(root.left, o1, o2);
    let right = commonAncestor(root.right, o1, o2)
    //都在右侧
    if(left == null) {
        return right;
    }
    //都在左侧
    if(right == null) {
        return left;
    }
    //在一左一右
    return root;
}

module.exports = {
    lowestCommonAncestor : lowestCommonAncestor
};