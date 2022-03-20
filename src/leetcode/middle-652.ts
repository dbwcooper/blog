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

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  const memo = new Map<string, number>(); // store all tree nodes
  const subTree = new Array<TreeNode>();

  function traverse(node: TreeNode | null): string {
    if (node === null) return "#";

    let left = traverse(node.left);
    let right = traverse(node.right);

    let str = `${left},${right},${node.val}`;

    if (memo.has(str)) {
      memo.set(str, memo.get(str)! + 1);
    } else {
      memo.set(str, 0);
    }

    // 多次重复不计入
    if (memo.get(str) === 1) {
      subTree.push(node);
    }

    return str;
  }

  traverse(root);

  return subTree;
}
