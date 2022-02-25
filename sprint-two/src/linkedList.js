var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var currentNode = Node(value);
    if (list.head === null) {
      list.head = currentNode;
      list.tail = currentNode;
    }
    if (list.head && list.tail) {
      var prevNode = list.tail;
      prevNode.next = currentNode;
      list.tail = currentNode;
    }
  };

  list.removeHead = function () {
    if (!list.head) {
      return;
    }

    var currHeadVal = list.head.value;
    var nextNode = list.head.next;
    console.log(list.head, nextNode);

    if (!nextNode) {
      list.head = null;
      list.tail = null;
    } else {
      list.head = nextNode;
    }
    return currHeadVal;
  };

  list.contains = function (target) {
    var currNode = list.head;
    if (currNode.value === target) {
      return true;
    }

    while (currNode.next) {
      currNode = currNode.next;
      if (currNode.value === target) {
        return true;
      }
    }

    return false;
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
