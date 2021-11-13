

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  //hash the key into an index
  var index = getIndexBelowMaxForKey(k, this._limit);
  //if there is no bucket
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  //take the index and find it in storage
  let bucket = this._storage.get(index);
  let isFound = false;
  //if the key already exists, update the value
  for (let i of bucket) {
    if (k === i[0]) {
      isFound = true;
      i[1] = v;
    }
  }
  //if the key doesn't exist, push it to the array at the givne index
  if (!isFound) {
    this._storage.get(index).push([k, v]);
  }
  //push the [key, value] array into the bucket at the hashed index
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  for (let i of bucket) {
    if (k === i[0]) {
      return i[1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get the bucket
  let bucket = this._storage.get(index);
  //loop through the bucket
  for (let i = 0; i < bucket.length; i++) {
    //splice out the value (tuple) at the index
    if (k === bucket[i][0]) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


