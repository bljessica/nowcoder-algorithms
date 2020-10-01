/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 * 
 * @param root TreeNode类 the root of binary tree
 * @return int整型二维数组
 */
function threeOrders( root ) {
    // write code here
    let pre = [], mid = [], last = [];
    preOrder(root, pre);
    midOrder(root, mid);
    lastOrder(root, last);
    return [pre, mid, last];
}

function preOrder(root, pre) {
    if(root) {
        pre.push(root.val);
        preOrder(root.left, pre);
        preOrder(root.right, pre);
    }
    else {
        return;
    }
}

function midOrder(root, mid) {
    if(root) {
        midOrder(root.left, mid);
        mid.push(root.val);
        midOrder(root.right, mid);
    }
    else {
        return;
    }
}

function lastOrder(root, last) {
    if(root) {
        lastOrder(root.left, last);
        lastOrder(root.right, last);
        last.push(root.val);
    }
    else {
        return;
    }
}


module.exports = {
    threeOrders : threeOrders
};