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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  function split(arr: number[]) {
    let max = 0;
    let splitIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        splitIndex = i;
        max = arr[i];
      }
    }

    let left = arr.slice(0, splitIndex);
    let right = arr.slice(splitIndex + 1);
    let middle = arr[splitIndex];
    return { left, middle, right };
  }

  function traverse(nums: number[]): TreeNode | null {
    if (nums.length === 0) return null;

    const temp = split(nums);

    let node = new TreeNode();
    node.val = temp.middle;
    node.left = traverse(temp.left);
    node.right = traverse(temp.right);
    return node;
  }

  return traverse(nums);
}
