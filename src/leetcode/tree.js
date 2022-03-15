// 二叉树 深度优先遍历
const dfs = (node) => {
  if (node && node.children) {
    node.children.forEach(dfs);
  }
};

// 二叉树 广度优先遍历
const bfs = (root) => {
  let p = [root];
  while (p.length > 0) {
    let node = p.shift();
    console.log("node: ", node);
    if (node && node.children) {
      node.children.forEach((item) => {
        p.push(item);
      });
    }
  }
};

// 二叉树 先序遍历 结果等于 深度优先遍历
const preOrder = (root) => {
  if (!root) return root;

  console.log("root: ", root.value);
  preOrder(root.left);
  preOrder(root.right);
};

// 二叉树 中序遍历: 左中右

const inOrder = (root) => {
  if (!root) return;

  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
};

// 二叉树 后序遍历: 左右中

const postOrder = (root) => {
  if (!root) return;

  postOrder(root.left);
  postOrder(root.right);
  console.log(root.value);
};

// 先序遍历
const preOrderStack = (root) => {
  const stack = [root];
  while (stack.length > 0) {
    const n = stack.pop();
    console.log(n);
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
};

// 中序遍历
const inOrderStack = (root) => {
  const stack = [root];
  while (stack.length > 0) {
    const n = stack.pop();
    console.log(n);
    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);
  }
};

// 后序遍历
const postOrderStack = (root) => {
  const stack = [root];
  const outputStack = [];
  while (stack.length > 0) {
    const n = stack.pop();
    outputStack.push(n);
    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);
  }
  while (outputStack.length) {
    const n = outputStack.pop();
    console.log(n.val);
  }
};
