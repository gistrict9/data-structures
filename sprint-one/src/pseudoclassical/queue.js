var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.amount = 0;
  this.counter = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.amount] = value;
  this.amount++;
};

Queue.prototype.dequeue = function() {
  if (this.amount - this.counter) {
    var result = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter++;
    return result;
  }
};

Queue.prototype.size = function() {
  return this.amount - this.counter;
};

var newQueue = new Queue();
