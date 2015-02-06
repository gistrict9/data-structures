var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  extend(newTree, treeMethods);

  return newTree;
};


var extend = function(to, from) {
  for(var key in from) {
    to[key] = from[key];
  }
  return to;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var node = {};
  node.value = value;
  this.children.push(node);
};

treeMethods.contains = function(target){
  var node = this;

  var findValue = function (val, node) {

    var results = false;

    if(node.value === val){
      debugger;
      results = true;
    }else if(node.children !== undefined){
      for(var i = 0; i < node.children.length; i++){
        var res = findValue(target, node.children[i]);
        debugger;
        return res;
      }
    }
    return results;
  };
  return findValue(target, node);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
