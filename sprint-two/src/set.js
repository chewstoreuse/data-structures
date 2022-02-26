var Set = function () {
  var set = Object.create(setPrototype);
  set._storage = [];// [] // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function (item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
  // if (!this.contains(item)) {
  //   this._storage[item] = item;
  // }
};

setPrototype.contains = function (item) {
  if (this._storage.indexOf(item) !== -1) {
    return true;
  }
  return false;

  // if (!this._storage[item]) {
  //   return true;
  // } else {
  //   return false;
  // }
};

setPrototype.remove = function (item) {
  var indexRemove = this._storage.indexOf(item);
  this._storage.splice(indexRemove, 1);

  // delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
