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

function preorderTraversal(root: TreeNode | null): number[] {
  function preorder(node: TreeNode | null, arr: number[]): number[] {
    if (node === null) {
      return arr;
    }

    arr.push(node.val);
    preorder(node.left, arr);
    preorder(node.right, arr);

    return arr;
  }

  const nums: number[] = [];
  preorder(root, nums);

  return nums;
}
