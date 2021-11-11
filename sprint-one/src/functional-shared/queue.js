var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {
    head: 0,
    tail: 0
  };
  for (key in queueMethods) {
    storage[key] = queueMethods[key];
  }
  return storage;
};

var queueMethods = {
  enqueue: function (value) {
    this[this.tail] = value;
    this.tail++;
  },
  dequeue: function () {
    let response = this[this.head];
    delete this[this.head];
    this.head++;
    return response;
  },
  size: function () {
    return this.tail > this.head ? this.tail - this.head : 0;
  }
};


