var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.tail] = value;
  this.tail++;
};

Queue.prototype.dequeue = function () {
  let response = this[this.head];
  delete this[this.head];
  this.head++;
  return response;
};

Queue.prototype.size = function () {
  return this.tail > this.head ? this.tail - this.head : 0;
};