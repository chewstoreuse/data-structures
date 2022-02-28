var BinarySearchTree = function (value) {
  var tree = Object.create(binaryTreeMethods);
  tree.value = value;
  tree.left;
  tree.right;
  return tree;
};

var binaryTreeMethods = {
  insert: function (value) {
    if (this.value < value) {
      if (!this.right) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    } else {
      if (!this.left) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    }
  },
  contains: function (targetValue) {
    if (this.value === targetValue) {
      return true;
    }

    if (this.value < targetValue) {
      if (this.right) {
        return this.right.contains(targetValue);
      } else {
        return false;
      }
    } else {
      if (this.left) {
        return this.left.contains(targetValue);
      } else {
        return false;
      }
    }
  },
  depthFirstLog: function (cb) {
    this.value = cb(this.value);

    if (this.left) {
      this.left.depthFirstLog(cb);
    }

    if (this.right) {
      this.right.depthFirstLog(cb);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//insert() - O(n)
//contains() - O(log(n))
//depthFirstLog() - O(n)