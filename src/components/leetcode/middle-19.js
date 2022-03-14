/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let p1 = head,
    // 先移动 p2 到 n 个节点的问题
    p2 = getNth(head, n);

  if (!p2) {
    // n 移动的位置正好等于 节点总数
    head = head.next;
  }

  // 按顺序移动 p1 和 p2
  while (p2) {
    p2 = p2.next;

    if (!p2) {
      p1.next = p1.next.next;
      break;
    } else {
      p1 = p1.next;
    }
  }

  return head;
};

function getNth(head, n) {
  let p = head;
  while (n > 0) {
    p = p.next;
    n--;
  }
  return p;
}

const ListNode = {
  val: 1,
  next: {
    val: 2,
    next: null,
  },
};

removeNthFromEnd(ListNode, 2);
