var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) { //O(1)
  //invoke tree on value
  this.children.push(Tree(value));
  //push the new child into the children
};

treeMethods.contains = function(target) { //O(n)
  let isPresent = false;
  var search = function(tree) {
    if (target === tree.value) {
      isPresent = true;
    } else {
      //for loop
      for (let v of tree.children) {
        search(v);
      }
    }
  };
  search(this);
  return isPresent;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

