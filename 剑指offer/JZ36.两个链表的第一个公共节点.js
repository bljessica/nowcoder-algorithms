/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    if(!pHead1 || !pHead2) return null;
    let p = pHead1, q = pHead2;
    while(p) {
        q = pHead2;
        while(q) {
            if(p === q) return p;
            q = q.next;
        }
        p = p.next;
    }
    return null;
}