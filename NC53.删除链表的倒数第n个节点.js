/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
  * 
  * @param head ListNode类 
  * @param n int整型 
  * @return ListNode类
  */
 function removeNthFromEnd( head ,  n ) {
    // write code here
    let len = 0, p = head;
    while(p) {
        len++;
        p = p.next;
    }
    if(n == len) {
        return head.next;
    }
    p = head;
    for(let i = 0; i < len - n - 1; i++) {
        p = p.next;
    }
    p.next = p.next.next;
    return head;
}

module.exports = {
    removeNthFromEnd : removeNthFromEnd
};