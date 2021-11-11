var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {
    length: 0
  };
  for (key in queueMethods) {
    storage[key] = queueMethods[key];
  }
  return storage;
};

var queueMethods = {
  enqueue: function (value) {
    this[this.length] = value;
    this.length++;
  },
  dequeue: function () {
    let response = this[0];
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.length - 1];
    this.length > 0 ? this.length-- : this.length *= 1;
    return response;
  },
  size: function () {
    return this.length;
  }
};


