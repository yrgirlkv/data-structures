class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.head = 0;
    this.tail = 0;
  }

  enqueue (value) {
    this[this.tail] = value;
    this.tail++;
  }

  dequeue () {
    let response = this[this.head];
    delete this[this.head];
    this.head++;
    return response;
  }

  size () {
    return this.tail > this.head ? this.tail - this.head : 0;
  }
}
