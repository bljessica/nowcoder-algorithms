/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param head ListNode类 
 * @return ListNode类
 */
function detectCycle( head ) {
    // write code here
    let fast = head, slow = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        //有环
        if(slow == fast) {
            break;
        }
    }
    //无环
    if(!fast || !fast.next) {
        return null;
    }
    //有环
    fast = head;
    while(fast != slow) {
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
}

module.exports = {
    detectCycle : detectCycle
};