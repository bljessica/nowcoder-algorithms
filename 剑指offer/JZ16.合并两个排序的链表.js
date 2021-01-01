/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    // write code here
    let dummy = new ListNode(0), h = dummy;
    let p = pHead1, q = pHead2;
    while(p && q) {
        if(p.val < q.val) {
            h.next = p;
            p = p.next;
        }
        else {
            h.next = q;
            q = q.next;
        }
        h = h.next;
    }
    if(p) h.next = p;
    if(q) h.next = q;
    return dummy.next;
}