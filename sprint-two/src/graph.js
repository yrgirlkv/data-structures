

// Instantiate a new graph
var Graph = function() {
  this.graph = {};
};



// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) { // node = value
  //create empty node object
  let newNode = {
    value: node,
    edges: []
  };
  //add to .graph
  this.graph[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { //node is the target 'a'
  //iterate through obj
  for (let key in this.graph) {
    if (this.graph[key].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //iterate over node edges
  for (let i of this.graph[node].edges) {
    this.removeEdge(node, i);
  }
  // _.each(this.graph[node].edges, function(key) {
  //   Graph.prototype.removeEdge(node, key);
  // }, );
  //find the value that matches the node target
  delete this.graph[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { //maybe need to check the other node to make sure its deleted?
  if (this.graph[fromNode] && this.graph[toNode]) {
    let isPresentFrom = this.graph[fromNode].edges.indexOf(toNode) > -1;
    let isPresentTo = this.graph[toNode].edges.indexOf(fromNode) > -1;
    return isPresentFrom && isPresentTo;
  } else {
    return false;
  }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //we want to add each to the others array
  this.graph[fromNode].edges.push(toNode);
  this.graph[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //find index of to node in the from node array
  let toIndex = this.graph[fromNode].edges.indexOf(toNode);
  this.graph[fromNode].edges.splice(toIndex, 1);
  //repeat previous step for the index before
  let fromIndex = this.graph[toNode].edges.indexOf(fromNode);
  this.graph[toNode].edges.splice(fromIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.graph) {
    cb(this.graph[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


