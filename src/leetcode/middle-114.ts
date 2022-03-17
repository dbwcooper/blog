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
 * https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
 */

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  if (root === null) return;

  function traverse(node: TreeNode | null) {
    if (node === null) return;

    traverse(node.left);
    traverse(node.right);

    if (node.left) {
      let pr = node.right;
      let p = node.left;
      while (p) {
        if (!p.right) break;
        p = p.right;
      }

      p.right = pr;
      node.right = node.left;
      node.left = null;
    }
  }

  traverse(root);
}
