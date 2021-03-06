class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.start = 0;
    this.end = 0;
  }

  enqueue(value) {
    this.end++;
    this.storage[this.end] = value;
  }

  dequeue() {
    if (this.end === this.start) {
      return;
    }

    var value = this.storage[this.start + 1];
    delete this.storage[this.start + 1];
    this.start++;

    return value;
  }

  size() {
    return this.end - this.start;
  }
}
