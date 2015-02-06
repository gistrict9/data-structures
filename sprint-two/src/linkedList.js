var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.tail===null){
      list.tail = newNode;
    }else{
      var oldTail = list.tail;
      list.tail = newNode;
      oldTail.next = list.tail;
      // list.tail.next = newNode;
    }

    if (list.head === null) {
      list.head = newNode;
    }
    // list.head.next = newNode;
  };

  list.removeHead = function(){

    if(list.head === null){
      return null;
    }

    var prevHead = list.head.value;
    list.head = list.head.next;
    return prevHead;
  };

  list.contains = function(target){

    var result = false;

    function check (node){
      if(node === null){
        return result;
      }

      if(node.value === target){
        result = true;
      }else{
        check(node.next);
      }
      return result;
    };

    return check(list.head);
    // for(var key in list.tail){
    //   var nodeProp = list[key];
    //   if(nodeProp.value === target){
    //     return true;
    //   }
    // }
    // return false
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
