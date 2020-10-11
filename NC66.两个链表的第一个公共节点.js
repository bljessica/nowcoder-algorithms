/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    let p = pHead1;
    while(p) {
        let q = pHead2;
        while(q) {
            if(p.val == q.val) {
                return p;
            }
            else {
                q = q.next;
            }
        }
        p = p.next;
    }
    return null;
}

module.exports = {
    FindFirstCommonNode : FindFirstCommonNode
};