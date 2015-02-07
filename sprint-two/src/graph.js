

var Graph = function(){
  this.nodeList = [];
};

Graph.prototype.addNode = function(node){
  var graphNode = {};
  graphNode.link = null;
  graphNode.value = node;

  this.nodeList.push(graphNode);
};

Graph.prototype.contains = function(node){
  for(var i = 0; i<this.nodeList.length; i++) {
    var currentNode = this.nodeList[i];
    if(currentNode.value === node){
      return true;
    }else{
      return false;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){

  for(var i = 0; i<this.nodeList.length; i++) {
    var currentNode = this.nodeList[i];
    if(currentNode.value === node){
      this.nodeList.splice(i,1);
    }
  }
};
                                  //(puppies, sutsuma)
Graph.prototype.hasEdge = function(fromNode, toNode){
  // var node1 = this.nodeList[0];
  // var node2 = this.nodeList[2];

  var node1;
  var node2;

  for(var i=0; i<this.nodeList.length; i++){
    var currentNode = this.nodeList[i];
    if(currentNode.value === fromNode){
      node1 = currentNode;
    }
  }

  for(var i=0; i<this.nodeList.length; i++){
    var currentNode = this.nodeList[i];
    if(currentNode.value === toNode){
      node2 = currentNode;
    }
  }
  if(node1.link !== null && node2.link !== null){
    if(node1.link.value === toNode && node2.link.value === fromNode ){
      return true;
    }
  }else{
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var node1;
  var node2;

  for(var i=0; i<this.nodeList.length; i++){
    var currentNode = this.nodeList[i];
    if(currentNode.value === fromNode){
      node1 = currentNode;
    }
  }

  for(var i=0; i<this.nodeList.length; i++){
    var currentNode = this.nodeList[i];
    if(currentNode.value === toNode){
      node2 = currentNode;
    }
  }

  node1.link = node2;
  node2.link = node1;

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var node1;
  var node2;

  for(var i=0; i<this.nodeList.length; i++){
    var currentNode = this.nodeList[i];
    if(currentNode.value === fromNode){
      node1 = currentNode;
    }
  }

  for(var i=0; i<this.nodeList.length; i++){
    var currentNode = this.nodeList[i];
    if(currentNode.value === toNode){
      node2 = currentNode;
    }
  }

  node1.link = null;
  node2.link = null;

};

Graph.prototype.forEachNode = function(cb){
  for(var i=0; i<this.nodeList.length; i++){
    var currentNode = this.nodeList[i];
    cb(currentNode.value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



