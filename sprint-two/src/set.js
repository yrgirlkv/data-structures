var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  for (let key in this._storage) {
    if (item === this._storage[key]) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
//Sets are often instead implemented using more efficient data structures, particularly various flavors of trees, tries, or hash tables.
 */
