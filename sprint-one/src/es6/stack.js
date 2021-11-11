class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.index = 0;
  }

  push (value) {
    this[this.index] = value;
    this.index++;
  }

  pop () {
    let response = this[this.index - 1];
    delete this[this.index - 1];
    this.index--;
    return response;
  }

  size () {
    return this.index > 0 ? this.index : 0;
  }
}