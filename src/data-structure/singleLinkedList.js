class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  pop() {
    /** case: empty list */
    if (!this.head) return;

    /** case: one node */
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    /** case: many nodes */
    let current = this.head;
    let newTail = null;

    while (current.next) {
      current = current.next;
      /** current.next가 없을 경우 newTail이 마지막 list를 저장함 */
      newTail = current;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.size--;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      return;
    }
    let current = this.head;
    for (let i = 0; i !== index; i++) {
      current = current.next;
    }
    return current;
  }

  map(f) {
    const result = [];
    for (let p = this.head; p !== null; p = p.next) {
      result.push(f(p.value));
    }
    return result;
  }
}

const list = new SingleLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
console.log(
  "list >>",
  list.map((a) => a + 1)
);

console.log(" list 2 ", list.get(2));
