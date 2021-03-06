var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);
  storage.index = 0;
  return storage;
};

var stackMethods = {
  push: function (value) {
    this[this.index] = value;
    this.index++;
  },
  pop: function () {
    let response = this[this.index - 1];
    delete this[this.index - 1];
    this.index > 0 ? this.index-- : this.index *= 1;
    return response;
  },
  size: function () {
    return this.index;
  }
};