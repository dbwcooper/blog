/**
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/submissions/
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

// 理解 先序遍历，中序列遍历，后序遍历
export function maxDepth(root: TreeNode | null): number {
  let maxDepth = 1;

  function traverse(node: TreeNode, i) {
    if (node === null) {
      maxDepth = Math.max(maxDepth, i);
      return;
    }

    traverse(node.left, i + 1);
    traverse(node.right, i + 1);
  }

  traverse(root, 1);
  return maxDepth;
}

// function maxDepth(root) {
//   let maxDepth = 0;

//   let maxDepth2 = 0;
//   let depth = 0;
//   function traverse(node, n) {
//     if (!node) {
//       maxDepth = Math.max(maxDepth, n);
//       return;
//     }
//     depth++;
//     traverse(node.left, n + 1);
//     traverse(node.left, n + 1);
//     depth--;
//     maxDepth2 = Math.max(depth, n);
//   }

//   traverse(root, 1);

//   return [maxDepth, maxDepth2];
// }

// function maxDepth3(root) {
//   function maxDepth(node): number {
//     if (!node) return 0;

//     let leftMax = maxDepth(node.left);
//     let rightMax = maxDepth(node.right);

//     return Math.max(leftMax, rightMax) + 1;
//   }

//   return maxDepth(root);
// }
