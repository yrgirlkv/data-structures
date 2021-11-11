var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;
};

Stack.prototype.push = function (value) {
  this[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function (value) {
  let response = this[this.index - 1];
  delete this[this.index - 1];
  this.index--;
  return response;

};

Stack.prototype.size = function () {
  return this.index > 0 ? this.index : 0;
};