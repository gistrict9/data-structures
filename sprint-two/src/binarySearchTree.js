var BinarySearchTree = function(value){
  var newBinarySearchTree = {};
  newBinarySearchTree.value = value;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;
  extend(newBinarySearchTree, searchTreeMethods);

  return newBinarySearchTree;
};

var extend = function(to, from) {
  for(var key in from) {
    to[key] = from[key];
  }
  return to;
};

var searchTreeMethods = {};

searchTreeMethods.insert = function(value) {
  var newTree = BinarySearchTree(value);

  if (value > this.value) {
    if (this.right === null) {
      this.right = newTree;
    } else if (value > this.right.value) {
      this.right.right = newTree;
    } else {
      this.right.left = newTree;
    }
  } else {
    if (this.left === null) {
      this.left = newTree;
    } else if (value > this.left.value) {
      this.left.right = newTree;
    } else {
      this.left.left = newTree;
    }
  }
};

searchTreeMethods.contains = function(value) {
  var tree = this;

  var checkTree = function(val, tree){
    var results = false;

    if(tree.value === val){
      results = true;
    }else if(tree.right !== null && tree.value < val){
      var resRight = checkTree(val, tree.right);
      results = results || resRight;
    }else if(tree.left !== null){
      var resLeft = checkTree(val, tree.left);
      results = results || resLeft;
    }else{
      results = results;
    }
    return results;
  };
  return checkTree(value, tree);
};

searchTreeMethods.depthFirstLog = function(cb) {
  var topTree = this;

  var traverse = function(tree) {
    cb(tree.value);

    if(tree.left !== null){
      traverse(tree.left);
    }
    if(tree.right !== null){
      traverse(tree.right);
    }
  };
  traverse(topTree);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
