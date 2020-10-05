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
  * @return int整型二维数组
  */
 function levelOrder( root ) {
    // write code here
    if(root == null) {
        return [];
    }
    let queue = [], res = [];
    queue.push(root);
    while(queue.length > 0) {
        let len = queue.length, tmp = [];
        for(let i = 0; i < len; i++) {
            let node = queue.shift();
            tmp.push(node.val);
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
        }
        res.push(tmp);
    }
    return res;
}

module.exports = {
    levelOrder : levelOrder
};