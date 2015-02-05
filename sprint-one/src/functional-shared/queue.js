var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.amount = 0;
  newQueue.counter = 0;
  extend(newQueue, queueMethods);

  return newQueue;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.amount] = value;
  this.amount++;
};

queueMethods.dequeue = function() {
  if (this.amount - this.counter) {
    var result = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter++;
    return result;
  }
};

queueMethods.size = function() {
  return this.amount - this.counter;
};
