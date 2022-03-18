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

function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];

  const ret: number[][] = [];

  function traverse(node: TreeNode | null, level: number) {
    if (node === null) return null;
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);

    if (!ret[level]) {
      ret[level] = [];
    }
    ret[level].push(node.val);
  }
  traverse(root, 0);

  return ret;
}
