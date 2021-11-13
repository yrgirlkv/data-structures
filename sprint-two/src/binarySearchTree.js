var BinarySearchTree = function(value) {
  let obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};

BinarySearchTree.prototype.insert = function(newValue) {
  let newNode = BinarySearchTree(newValue);
  if (newValue > this.value) {
    if (this.right === null) {
      this.right = newNode;
    } else {
      this.right.insert(newValue);
    }
  } else if (newValue < this.value) {
    if (this.left === null) {
      this.left = newNode;
    } else {
      this.left.insert(newValue);
    }
  }
};

BinarySearchTree.prototype.contains = function(target) {
  if (target === this.value) {
    return true;
  }
  let nodeOfInterest = target > this.value ? this.right : this.left;
  if (nodeOfInterest === null) {
    return false;
  } else {
    return nodeOfInterest.contains(target);
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
