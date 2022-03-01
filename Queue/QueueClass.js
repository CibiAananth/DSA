class Queue {
  #list = [];
  size = 0;

  constructor() {
    this.size = 0;
    this.#list = [];
  }

  enqueue(data) {
    this.#list.push(data);
    this.size += 1;
  }

  dequeue() {
    this.size -= 1;
    return this.#list.shift();
  }

  peek() {
    return this.#list[0];
  }

  clear() {
    this.size = 0;
    this.#list.length = 0;
  }

  print() {
    for (let i = 0; i < this.#list.length; i++) {
      console.log(this.#list[i]);
    }
  }
}
