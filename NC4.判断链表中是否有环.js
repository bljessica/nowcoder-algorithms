/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param head ListNode类 
 * @return bool布尔型
 */
function hasCycle( head ) {
    // write code here
    if(head == null || head.next == null) {
       return false;
    }
    let fast = head, slow = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(fast == slow) {
            break;
        }
    }
    if(!fast || !fast.next) {
        return false;
    }
    else {
        return true;
    }
}

module.exports = {
    hasCycle : hasCycle
};