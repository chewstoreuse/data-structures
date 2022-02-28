

// Instantiate a new graph
var Graph = function () {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  if (this.storage[node] !== undefined) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  for (key in this.storage) {
    var nodeIndex = this.storage[key].indexOf(node);
    if (nodeIndex !== -1) {
      this.storage[key].splice(nodeIndex, 1);
    }
  }

  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  var fromArray = this.storage[fromNode];
  var toArray = this.storage[toNode];

  return (fromArray.indexOf(toNode) !== -1 && toArray.indexOf(fromNode) !== -1);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  this.storage[fromNode] = this.storage[fromNode].filter(function (element) { element !== toNode; });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (var key in this.storage) {
    cb(Number(key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//addNode() - O(1)
//contains() - O(1)
//removeNode() - O(n^2)
//hasEdge() - O(n)
//addEdge() - O(1)
//removeEdge() - O(n)
//forEachNode() - O(n^2)