class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first element
  insertFirst(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  // insert last element
  insertLast(value) {
    if (!this.head) {
      this.insertFirst(value);
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value, null);
    this.size++;
  }

  // insert at index
  insertAt(value, index) {
    if (index === 0 || this.size === 0) {
      this.insertFirst(value);
    } else if (index >= this.size) {
      this.insertLast(value);
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      current.next = new Node(value, current.next);
      this.size++;
    }
  }

  getAt(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  // remove first element
  removeFirst() {
    this.head = this.head.next;
    this.size--;
  }

  // remove last element
  removeLast() {
    if (this.size <= 0) {
      return;
    } else if (this.size === 1) {
      this.removeFirst();
    } else {
      let current = this.head;
      let prev = null;
      while (current.next) {
        prev = current;
        current = current.next;
      }
      prev.next = null;
      this.size--;
    }
  }

  // remove at index
  removeAt(index) {
    if (index === 0) {
      this.removeFirst();
    } else if (index >= this.size - 1) {
      this.removeLast();
    } else {
      let current = this.head;
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
  }

  // print out
  printValues() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
