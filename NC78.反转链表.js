/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

function ReverseList(pHead)
{
    // write code here
    if(pHead == null){
        return pHead;
    }
    let cur = pHead, next = pHead.next, nNext = pHead;
    while(next){
        nNext = next.next;
        next.next = cur;
        cur = next;
        next = nNext;
    }
    pHead.next = null;
    return cur;
}

module.exports = {
    ReverseList : ReverseList
};