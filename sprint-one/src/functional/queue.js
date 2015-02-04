var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    if (size - counter) {
      var result = storage[counter];
      delete storage[counter];
      counter++;
      return result;
    }
  };

  someInstance.size = function(){
    return size - counter;
  };

  return someInstance;
};
