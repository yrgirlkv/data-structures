

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._filledSlots = 0;
};

HashTable.prototype.alterSize = function (newSize) {
  this._limit *= newSize;
  this._oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  this._filledSlots = 0;
  this._oldStorage.each( (function(value, index, collection) {
    if (value !== undefined) {
      for (let i of value) {
        this.insert(i[0], i[1]);
      }
    }
  }).bind(this));
  delete this._oldStorage;

  // trying with a ARROW FUNCTION (es6 allows to use arrow function where `this` scope is bound to the instance the function is called in) -- works
  // this._oldStorage.each( (value, index, collection) => {
  //   if (value !== undefined) {
  //     for (let i of value) {
  //       this.insert(i[0], i[1]);
  //     }
  //   }
  // });
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._filledSlots++;
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  let bucket = this._storage.get(index);
  let isFound = false;
  for (let i of bucket) {
    if (k === i[0]) {
      isFound = true;
      i[1] = v;
    }
  }
  if (!isFound) {
    this._storage.get(index).push([k, v]);
  }
  if (this._filledSlots > (0.75 * this._limit)) {
    this.alterSize(2);

  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  if (bucket === undefined) {
    return undefined;
  }
  for (let i of bucket) {
    if (k === i[0]) {
      return i[1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._filledSlots--;
  let bucket = this._storage.get(index);
  for (let i = 0; i < bucket.length; i++) {
    if (k === bucket[i][0]) {
      bucket.splice(i, 1);
    }
  }
  if (this._filledSlots < 0.25 * this._limit) {
    this.alterSize(0.5);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//ADVANCED CONTENT!!!!!!!!!!



