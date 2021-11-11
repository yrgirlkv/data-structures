var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function () {
  let response = this[0];
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  delete this[this.length - 1];
  this.length > 0 ? this.length-- : this.length *= 1;
  return response;
};

Queue.prototype.size = function () {
  return this.length;
};