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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) return null;

  let val = preorder[0];
  let node = new TreeNode();

  const temp = findOrder(preorder, inorder, val);

  node.val = val;
  node.left = buildTree(temp.preorderLeft, temp.inorderLeft);
  node.right = buildTree(temp.preorderRight, temp.inorderRight);

  return node;
}

function findOrder(preorder: number[], inorder: number[], val: number) {
  let inorderMiddle = 0;
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === val) {
      inorderMiddle = i;
      break;
    }
  }

  // 该节点的左边所有节点的 前序，中序遍历节点，
  let inorderLeft = inorder.slice(0, inorderMiddle);
  let preorderLeft = preorder.slice(1, inorderLeft.length + 1);

  // 该节点的右侧所有节点的 前序，中序遍历节点，
  let inorderRight = inorder.slice(inorderMiddle + 1);
  let preorderRight = preorder.slice(inorderLeft.length + 1);

  return {
    inorderLeft,
    preorderLeft,

    inorderRight,
    preorderRight,
  };
}
