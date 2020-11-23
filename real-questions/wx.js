// 1.	传入单向链表的头节点，删除指定值的元素，返回删除后的链表头节点，其中，链表节点结构为：
// Node {
// value: number,
// next: Node
// }
// 例如：
// 1->2->3->4->3，删除值为3的元素，删除后为1->2->4。
function deleteNode(pHead, val) {
    if(!pHead) return null;
    let dummy = new Node(0);
    dummy.next = pHead;
    let pre = dummy, cur = pHead;
    while(cur) {
        while(cur.value === val) {
            cur = cur.next;
        }
        pre.next = cur;
        pre = pre.next;
        cur = cur.next;
    }
    return dummy.next;
}

// 2.	遍历一颗DOM节点树，删除所有不可见（仅指display: none）的节点。
function deleteInvisibleNodes(root) {
    if(!root || root.style.display == 'none') return null;
    for(let i = 0; i < root.childNodes.length; i++) {
        let node = root.childNodes[i];
        if((node.nodeType != 3) && (node.nodeName.toLowerCase() != 'script')) {
            if(node.style.display == 'none') {
                root.removeChild(node);
            }
            else {
                deleteInvisibleNodes(node);
            }
        }
    }
    return root;
}

// 3.	对于任意32位整型，仅允许使用加减乘除及位运算（即与、或、异或、非、左移和右移），实现如下函数：输入非零值输出0、输入0输出1。
function output(num) {
    if((num ^ 0) !== 0) return 0;
    else return 1;
}

// 4.	给定一个三角形阵列（以二维数组表示），每次只能移动到下层左右相邻的节点，找出从顶端到底部最小的路径和，例如：
// [
// [3],
// [1, 2],
// [7, 5, 6],
// [5, 4, 3, 1]
// ]
// 其最小路径和为12（即3+1+5+3）。
function minSum(triangle) {
    let dp = triangle;
    for(let i = dp.length - 2; i >= 0; i--) {
        for(let j = 0; j < dp[i].length; j++) {
            dp[i][j] = Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]) + triangle[i][j];
        }
    }
    return dp[0][0];
}