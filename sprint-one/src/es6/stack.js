class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.len = 0;
  }

  push(value) {
    this.len++;
    this.storage[this.len] = value;
  }

  pop() {
    if (this.len === 0) {
      return;
    }

    var popped = this.storage[this.len];
    delete this.storage[this.len];
    this.len--;

    return popped;
  }

  size() {
    return this.len;
  }
}