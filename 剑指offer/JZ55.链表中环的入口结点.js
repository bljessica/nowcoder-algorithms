/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    // write code here
    if(!pHead || !pHead.next || !pHead.next.next) return null;
    let fast = pHead.next.next, slow = pHead.next;
    while(fast && fast.next) {
        if(fast === slow) break;
        fast = fast.next.next;
        slow = slow.next;
    }
    //判断是否有环
    if(!fast || !slow) {
        return false;
    }
    fast = pHead;
    while(fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
}
module.exports = {
    EntryNodeOfLoop : EntryNodeOfLoop
};