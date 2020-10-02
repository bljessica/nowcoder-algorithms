/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
  * 
  * @param l1 ListNode类 
  * @param l2 ListNode类 
  * @return ListNode类
  */
 function mergeTwoLists( l1 ,  l2 ) {
    // write code here
    let p = new ListNode(-1);
    let dummy = p;
    while(l1 && l2) {
        if(l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        }
        else {
            p.next = l2;
            l2 = l2.next;
        }
         p = p.next;
    }
    if(l1) {
        p.next = l1;
    }
    if(l2) {
        p.next = l2;
    }
    return dummy.next;
}

module.exports = {
    mergeTwoLists : mergeTwoLists
};