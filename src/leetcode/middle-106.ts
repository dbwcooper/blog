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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length === 0) return null;

  let rootVal = postorder[postorder.length - 1];

  let temp = getOrder(inorder, postorder, rootVal);
  let node = new TreeNode();
  node.val = rootVal;

  node.left = buildTree(temp.inorderLeft, temp.postorderLeft);
  node.right = buildTree(temp.inorderRight, temp.postorderRight);

  return node;
}

function getOrder(inorder: number[], postorder: number[], rootVal: number) {
  let inorderMiddle = 0;
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === rootVal) {
      inorderMiddle = i;
    }
  }

  let inorderLeft = inorder.slice(0, inorderMiddle);
  let inorderRight = inorder.slice(inorderMiddle + 1);

  let postorderLeft = postorder.slice(0, inorderLeft.length);
  let postorderRight = postorder.slice(inorderLeft.length, -1);

  return {
    inorderLeft,
    inorderRight,
    postorderLeft,
    postorderRight,
  };
}
