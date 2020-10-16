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
 function zigzagLevelOrder( root ) {
    // write code here
    if(root == null) {
        return [];
    }
    let queue = [];
    let res = [];
    let index = 0;
    queue.push(root);
    while(queue.length > 0) {
        let len = queue.length;
        let tmpArr = [];
        for(let i = 0; i < len; i++) {
            let tmp = queue.shift();
            if((index % 2) == 0) {
                tmpArr.push(tmp.val);
            }
            else {
                tmpArr.unshift(tmp.val);
            }
            if(tmp.left) {
                queue.push(tmp.left);
            }
            if(tmp.right) {
                queue.push(tmp.right);
            }
        }
        res.push(tmpArr);
        index++;
    }
    return res;
}

module.exports = {
    zigzagLevelOrder : zigzagLevelOrder
};