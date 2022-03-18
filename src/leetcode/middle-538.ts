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

function convertBST(root: TreeNode | null): TreeNode | null {
  let num = 0;
  function traverse(node: TreeNode | null) {
    if (node === null) return;

    traverse(node.right);
    num += node.val;
    node.val = num;
    traverse(node.left);
  }

  traverse(root);

  return root;
}
