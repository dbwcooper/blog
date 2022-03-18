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
 */

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true;

  return comp(root.left, root.right);
}

function comp(left: TreeNode | null, right: TreeNode | null) {
  if (left === null || right === null) return left === right;

  if (left.val !== right.val) return false;

  return comp(left.left, right.right) && comp(left.right, right.left);
}
