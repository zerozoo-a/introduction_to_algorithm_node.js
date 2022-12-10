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

  /**
   * 선행재귀
   * stack이 해제되는 순서대로 순회합니다.
   * a->b->c의 경우 c->b->a
   *
   * @param {Node} node
   * @param {number} n
   */
  traverse1(node, n = 0) {
    if (node !== null) {
      this.traverse1(node.next, n + 1);
      console.log(`data: ${n}`, node.val);
    }
  }

  /**
   *
   *
   * 후행재귀
   * 출력을 먼저 하고 다음 재귀로 넘어가기 때문에
   * 스택의 안쪽부터 출력이 이미 실행된 채로 다음 재귀로 넘어간다.
   *
   * @param {Node} node
   * @param {number} n
   */
  traverse2(node, n = 0) {
    if (node !== null) {
      console.log(`data: ${n}`, node.val);
      this.traverse2(node.next, n + 1);
    }
  }
}

const conga = new LinkedList();

conga.add("a");
conga.add("b");
conga.add("c");
conga.add("d");
console.log("conga", conga);
conga.traverse1(conga.head); // d c b a
conga.traverse2(conga.head); // a b c d
