var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    list.tail = newNode;
    list.tail.next = newNode;
    if (list.head === null) {
      list.head = newNode;
    }
  };

  list.removeHead = function(){
    var prevHead = list.head.value;
    list.head = list.tail;
    return prevHead;
  };

  list.contains = function(target){
    if(list.tail.next === target){
      return  true;
    }else{
      return false;
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
