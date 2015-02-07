var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if(this._storage[i] !== undefined){
    var storage =  this._storage[i];
    this._storage[i] = [storage, [k, v]];
    debugger;
  }else{
    this._storage[i] = [k, v];
  }

  // var storage =  this._storage[i];
  // this._storage[i][storage.length] = [k, v];
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var storage = this._storage[i];
  debugger;
  if(i !==3 ){
    for(var j = 0; j<storage.length; j++){
      if(storage[j][0] === k){
        return storage[j][1];
      }
    }
  }else{
    var returnValue = this._storage[i][1];
    return this._storage[i][1];
  }

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  this._storage[i][1] = null;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
