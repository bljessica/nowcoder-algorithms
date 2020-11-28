function ListNode(x){
    this.val = x;
    this.next = null;
}
function deleteDuplication(pHead)
{
    // write code here
    if(!pHead) return null;
    let dummy = new ListNode(0), cur = dummy;
    dummy.next = pHead;
    while(cur.next) {
        let next = cur.next;
        let flag = false;
        while(next && next.next && next.val === next.next.val) {
            if(!flag) flag = true;
            next = next.next;
        }
        if(flag) {
            cur.next = next.next;
        }
        else {
            cur = cur.next;
        }
    }
    return dummy.next;
}
module.exports = {
    deleteDuplication : deleteDuplication
};