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

var removeDups = list => {   //list holds the variable name of the linkedlist aka the head
  var ptA = list;
  while (ptA.next !== null) {
    var ptB = ptA;
    var checkAB = (A, B) => {
      while (B.next !== null) {
        if (B.next.data !== A.data) {
          B = B.next;
          checkAB(A, B);
        } else {
          // B = B.next.next //NO! you're only setting the pointer to b.next.next NOT The b.next value itself
          B.next = B.next.next 
          checkAB(A, B)
        }
      }
      return
    }
    checkAB(ptA, ptB);
    ptA = ptA.next
  }
  return
}

//Easier to create linkedlist from tail to head
var e = new Node('e');
var d = new Node('a');
d.next = e;
var a3 = new Node('a');
a3.next = d;
var a2 = new Node('a');
a2.next = a3;
var b = new Node('a');
b.next = a2;
var a = new Node('a');
a.next = b;
var myList = a;



//or can do head to tail
// var mylist = new Node ('a');
// var b = new Node('b');
// mylist.next = b
// console.log(mylist)
console.log('before', myList)
removeDups(myList);
console.log('after', myList)