var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.len = 0;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {
  enqueue: function (value) {
    this.len++;
    this.storage[this.len] = value;
  },
  dequeue: function () {
    if (this.len === 0) {
      return;
    }

    var dequeued = this.storage[1];
    delete this.storage[1];
    this.len--;

    for (var key in this.storage) {
      var value = this.storage[key];
      delete this.storage[key];

      this.storage[Number(key) - 1] = value;
    }

    return dequeued;
  },
  size: function () {
    return this.len;
  }
};


