/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 * https://leetcode-cn.com/problems/invert-binary-tree/
 * 反转二叉树
 */

function invertTree(root: TreeNode | null): TreeNode | null {
  function invert(node: TreeNode | null) {
    if (node) {
      let temp = node.right;
      node.right = node.left;
      node.left = temp;
    }
    return node;
  }

  function traverse(node: TreeNode | null) {
    if (!node) return;
    traverse(node.left);
    traverse(node.right);
    invert(node);
  }
  traverse(root);

  return root;
}
