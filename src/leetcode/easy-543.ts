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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxLength = 0;
  function maxDepth(node: TreeNode | null, max: number): number {
    if (node === null) {
      return max;
    }

    let leftMax = maxDepth(node.left, max + 1);
    let rightMax = maxDepth(node.right, max + 1);
    maxLength = Math.max(maxLength, leftMax + rightMax);

    return Math.max(leftMax, rightMax);
  }

  maxDepth(root, 0);

  return maxLength;
}
