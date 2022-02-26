class Stack {
  constructor() {
    this.size = 0;
    this.items = [];
  }

  push(item) {
    this.items[this.size++] = item;
  }

  pop() {
    return this.items[--this.size];
  }

  peek() {
    return this.items[this.size - 1];
  }

  clear() {
    this.size = 0;
    this.items.length = 0;
  }

  print() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}
