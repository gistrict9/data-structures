var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.amount = 0;
  newStack.storage = {};
  extend(newStack, stackMethods);

  return newStack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.amount] = value;
  this.amount++;
};

stackMethods.pop = function(){
  this.amount &&  this.amount--;
  var results =  this.storage[this.amount];
  delete this.storage[this.amount];
  return results;
};

stackMethods.size = function(){
  return this.amount;
};
