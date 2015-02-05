var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.amount = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.amount] = value;
  this.amount++;
};

stackMethods.pop = function() {
  this.amount &&  this.amount--;
  var results =  this.storage[this.amount];
  delete this.storage[this.amount];
  return results;
};

stackMethods.size = function() {
  return this.amount;
};
