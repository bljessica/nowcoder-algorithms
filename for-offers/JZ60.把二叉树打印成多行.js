/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    // write code here
    if(!pRoot) return [];
    let res = [], queue = [];
    queue.push(pRoot);
    while(queue.length > 0){
        let len = queue.length, list = []; 
        for(let i = 0; i < len; i++){
            let node = queue.shift();
            list.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        res.push(list);
    }
    return res;
}
module.exports = {
    Print : Print
};