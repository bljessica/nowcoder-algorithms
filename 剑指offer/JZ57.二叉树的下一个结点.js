/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode)
{
    // write code here
    if(pNode.right) {
        let node = pNode.right;
        while(node && node.left) {
            node = node.left;
        }
        return node;
    }
//         return pNode.right;
    while(pNode) {
        let parent = pNode.next;
        if(parent && parent.left === pNode) return parent;
        pNode = parent;
    } 
    return null;
}
module.exports = {
    GetNext : GetNext
};