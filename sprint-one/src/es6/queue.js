class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.length = 0;
  }

  enqueue (value) {
    this[this.length] = value;
    this.length++;
  }

  dequeue () {
    let response = this[0];
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.length];
    this.length > 0 ? this.length-- : this.length *= 1;
    return response;
  }

  size () {
    return this.length;
  }
}
