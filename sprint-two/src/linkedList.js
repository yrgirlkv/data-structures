var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { //O(1)
    let node = Node(value);
    //check if there is already a tail, if there is a tail
    if (list.tail !== null) {
      //assign the next tail to the new node;
      list.tail.next = node;
    } else { // if there is NOTHING! //assign
      list.head = node;
    }
    list.tail = node;
  };

  list.removeHead = function() { //O(1)
    if (list.head !== null) {
      //store node as value
      let currentNode = list.head.value;
      //find the current head node, find the next node, and reassign
      list.head = list.head.next;
      return currentNode;
    }
  };

  list.contains = function(target) { //O(n)
    var search = function (node) {
      if (target === node.value) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return search(node.next);
      }
    };
    return search(this.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */