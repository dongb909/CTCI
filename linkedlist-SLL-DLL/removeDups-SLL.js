/* Remove duplicates from an unsorted linked list.
THE DUPLICATE MEANS SAME CHARACTER BUT NOT SAME REFERENCE! 
A will never = A unless they're from the same node bc though same character, but the nodes themselves are in completely different locations in memory
If A = A then that means that it's the same node and that there's a LOOP
Then.. How would you solve this if a temporary buffer is not allowed?
Type not specified so default SLL
*/


//SOLUTION 1 NO BUFFER
class Node {
  constructor (data) {
    this.data = data;
    this.next = null; //default
  }
}

var checkForDuplicate = (node1, node2) => {
  while (node2.next !== null) {
    if (node2.next.data !== node1.data) {
      node2 = node2.next;
      checkForDuplicate(node1, node2);
    } else {
      // B = B.next.next //NO! you're only setting the pointer to b.next.next NOT The b.next value itself
      node2.next = node2.next.next 
      checkForDuplicate(node1, node2)
    }
  }
  return
}
var removeDups = list => {   //list holds the variable name of the linkedlist aka the head
  var mainPointer = list;
  while (mainPointer.next !== null) {
    var iteratorPointer = mainPointer;
    checkForDuplicate(mainPointer, iteratorPointer);
    mainPointer = mainPointer.next
  }
  return list
}

//Easier to create linkedlist from tail to head
var e = new Node('e');
var d = new Node('a');
d.next = e;
var a3 = new Node('c');
a3.next = d;
var a2 = new Node('a');
a2.next = a3;
var b = new Node('a');
b.next = a2;
var a = new Node('a');
a.next = b;
var myList = a;

// console.log(removeDups(myList))









//WITHOUT RECURSION
var dedup = (linkedList) => {
  var mainPointer = linkedList
  while (mainPointer.next !== null) {
    subPointer = mainPointer     //START ALL POINTERS AT FIRST NODE!!!!
    while (subPointer.next !== null) {
      if (mainPointer.data === subPointer.next.data) { 
        subPointer.next = subPointer.next.next;
      } else {
        subPointer = subPointer.next
      }
    }
    mainPointer = mainPointer.next
  }
  return linkedList
}

// console.log (dedup(myList))



//SOLUTION WITH HASHTABLE
var hashtable = {}

var storeToHashtable = value => {
  if (value in hashtable) {
    return
  } else {
    hashtable[value] = 1;
    return 1
  }
}

var deleteDuplicate = linkedList => {
  if (linkedList === null) {
    return null
  }
  var pointer = linkedList;
  storeToHashtable(pointer.data);
  console.log('hasshhhh', hashtable)
  while (pointer.next !== null) {
    if (hashtable[pointer.next.data] === 1) {
      pointer.next = pointer.next.next
      //aka delete next node duplicate
    } else {
      storeToHashtable(pointer.next.data)
      pointer = pointer.next;
    }
  }
  return linkedList
}

console.log('original list', myList)
console.log(deleteDuplicate(myList))
console.log(hashtable)