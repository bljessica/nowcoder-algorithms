/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
    let dummy = new ListNode(0);
    let pre = pHead, cur = pHead;
    dummy.next = pHead;
    while(cur && cur.next) {
        let next = cur.next;
        cur.next = next.next;
        next.next = pre;
        dummy.next = next;
        //更新
        pre = next;
    }
    return dummy.next;
}