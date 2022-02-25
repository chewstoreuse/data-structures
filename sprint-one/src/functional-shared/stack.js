var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  _.extend(someInstance, stackMethods);
  someInstance.storage = {};
  someInstance.len = 0;

  return someInstance;
};

var stackMethods = {
  push: function (value) {
    this.len++;
    this.storage[this.len] = value;
  },
  pop: function () {
    if (this.len === 0) {
      return;
    }

    var popped = this.storage[this.len];
    delete this.storage[this.len];
    this.len--;

    return popped;
  },
  size: function () {
    return this.len;
  }
};


