var Graph = function(){
  this.nodeList = [];
  this.edges = [];
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

Graph.prototype.hasEdge = function(fromNode, toNode){
  var edgeTuple = this.edges;

  for (var i=0; i < edgeTuple.length; i++) {
    if(edgeTuple[i][0]===fromNode && edgeTuple[i][1]===toNode){
      return true;
    }
  }
  return false;
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

  this.edges.push([node1.value, node2.value]);
  this.edges.push([node2.value, node1.value]);
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

  var edgeTuple = this.edges;

  for (var i=0; i < edgeTuple.length; i++) {
    if(edgeTuple[i][0]===fromNode && edgeTuple[i][1]===toNode){
      edgeTuple.splice(i,1);
    }
  }
  for (var i=0; i < edgeTuple.length; i++) {
    if(edgeTuple[i][0]===toNode && edgeTuple[i][1]===fromNode){
      edgeTuple.splice(i,1);
    }
  }
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



