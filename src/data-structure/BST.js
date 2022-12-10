class Node {
  constructor(val) {
    this.data = val;
    this.left = this.right = null;
  }
}
/**
 * @param {Node} node
 *
 */
const printInOrder = (node) => {
  if (!node) return;

  printInOrder(node.left);
  console.log(node.data);
  printInOrder(node.right);
};

const main = (() => {
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);

  printInOrder(root);
  console.log(`InOrder traversal of binary tree \n`);
  return 0;
})();
