

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); // <---- linear

  if (!this._storage.get(index)) {
    this._storage.set(index, []);
  }

  this._storage.get(index).push([k, v]);

  if (this._storage.get(index)) {
    this._storage.get(index).forEach(function (tuple) {
      if (tuple[0] === k) {
        tuple[1] = v;
        return;
      }
    });
  }
};

HashTable.prototype.retrieve = function (k) {
  var retrievedValue;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketArray = this._storage.get(index);

  bucketArray.forEach(function (tuple) {
    if (tuple[0] === k) {
      retrievedValue = tuple[1];
    }
  });

  return retrievedValue;
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var target = this.retrieve(k);

  var indexSplice;

  this._storage.get(index).forEach(function (tuple, i) {
    if (tuple[0] === k) {
      var indexSplice = i;
    }
  });
  this._storage.get(index).splice(indexSplice, 1);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

//insert() - O(n)
//retrieve() - O(n)
//remove() - O(n)

