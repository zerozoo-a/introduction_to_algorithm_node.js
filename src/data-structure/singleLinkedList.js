class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  add(val) {
    const node = new Node(val);
    let current = this.head;
    if (this.head === null) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.tail = node;
    this.length++;
    return this;
  }

  traverse1(node, n = 0) {
    if (node !== null) {
      this.traverse1(node.next, n + 1);
      console.log(`data: ${n}`, node.val);
    }
  }
}

const conga = new LinkedList();

conga.add("a");
conga.add("b");
conga.add("c");
conga.add("d");
console.log("conga", conga);
conga.traverse1(conga.head);
