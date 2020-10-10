/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
  * 
  * @param head ListNode类 
  * @param k int整型 
  * @return ListNode类
  */
 function reverseKGroup( head ,  k ) {
    // write code here
    let reverse = function(node) {
        if(node === null) {
            return node;
        }
        let count = 0, cur = node;
        while(cur != null && count != k) {
            cur = cur.next;
            count++;
        }
        if(count == k) {
            cur = reverse(cur);
            while(count > 0) {
                let tmp = node.next;
                node.next = cur;
                cur = node;
                node = tmp;
                count--;
            }
            node = cur;
        }
        return node;
    }
    return reverse(head);
}

module.exports = {
    reverseKGroup : reverseKGroup
};