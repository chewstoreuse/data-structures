var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;

  // Implement the methods below
  someInstance.enqueue = function (value) {
    size++;
    storage[size] = value;
  };

  someInstance.dequeue = function () {
    if (size === 0) {
      return;
    }

    var dequeued = storage[1];
    delete storage[1];
    size--;

    for (var key in storage) {
      var value = storage[key];
      delete storage[key];
      storage[Number(key) - 1] = value;
    }

    return dequeued;
  };

  someInstance.size = function () {
    return size;
  };

  return someInstance;
};
