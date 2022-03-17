/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 * https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
 */

function connect(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  connectTwoNodes(root.left, root.right)
  return root;
}

function connectTwoNodes(node1: TreeNode | null, node2: TreeNode | null) {
  if (!node1 || !node2) return;
  node1.next = node2;
  connectTwoNodes(node1.left, node1.right);
  connectTwoNodes(node2.left, node2.right);

  // 不同父节点的相邻节点
  connectTwoNodes(node1,right, node2.left)
}