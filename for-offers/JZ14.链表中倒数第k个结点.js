/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
    let len = 0;
    let p = head;
    while(p) {
        len++;
        p = p.next;
    }
    if(k > len) return null;
    p = head;
    for(let i = 0; i < len - k; i++) {
        p = p.next;
    }
    return p;
}