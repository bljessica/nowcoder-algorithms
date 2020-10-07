/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param head1 ListNode类 
 * @param head2 ListNode类 
 * @return ListNode类
 */
function addInList( head1 ,  head2 ) {
    // write code here
    //先反转两链表
    let p1 = head1, p2 = head2;
    let newHead1 = null, newHead2 = null;//新表头
    let len1 = 0, len2 = 0;
    while(p1) {
        p1 = head1.next;
        head1.next = newHead1;
        newHead1 = head1;
        head1 = p1;
        len1++;
    }
    while(p2) {
        p2 = head2.next;
        head2.next = newHead2;
        newHead2 = head2;
        head2 = p2;
        len2++;
    }
    //较长的链表作为结果表head1
    if(len1 < len2) {
        head1 = newHead2;
        head2 = newHead1;
    }
    else {
        head1 = newHead1;
        head2 = newHead2;
    }
    //两表相加，结果表为head1
    let carry = 0;//进位
    p1 = head1;
    p2= head2;
    while(true) {
        p1.val = p1.val + p2.val + carry;
        if(p1.val > 9) {
            p1.val -= 10;
            carry = 1;
        }
        else {
            carry = 0;
        }
        if(!p2.next) {
            break;
        }
        p1 = p1.next;
        p2 = p2.next;
    }
    //处理最后的进位问题
    while(carry) {
        //p1也刚好到尾部
        if(!p1.next) {
            p1.next = new ListNode(1);
            carry = 0;
        }
        else {
            p1 = p1.next;
            p1.val = p1.val + carry;
            if(p1.val > 9) {
                p1.val -= 10;
                carry = 1;
            }
            else {
                carry = 0;
            }
        }
        
    }
    //反转结果表
    p1 = head1;
    newHead1 = null;
    while(p1) {
        p1 = head1.next;
        head1.next = newHead1;
        newHead1 = head1;
        head1 = p1;
    }
    return newHead1;
}

module.exports = {
    addInList : addInList
};