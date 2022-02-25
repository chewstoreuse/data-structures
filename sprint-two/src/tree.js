var Tree = function (value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  // your code here
  newTree.children = []; // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  var childNode = Tree(value);
  this.children.push(childNode);
};

treeMethods.contains = function (target) {
  var doesContain = false;

  if (this.value === target) {
    return true;
  }

  if (this.children.length > 0) {
    this.children.forEach(function (child) {
      if (child.contains(target)) {
        doesContain = true;
        return;
      }
    });
  }

  return doesContain;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// .addChild O(1)
// .contains O(n)