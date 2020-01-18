/* Find the kth to last element of a slingly linked list
*/
//I: linkedlist
//O: element data
//E: if list is null, if n is outside of list length aka null?
//C: n/a
//setting 0 = last node 

class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

var findKth = (list, k) => {      //usually only pointers can be equal to null, not so don't have to worry about k
  if (list === null) {
    return null
  } 
  var length = 0;
  var tracker = list;
  while (tracker !== null) {
    length++;
    tracker = tracker.next
  }
  length = length - k;
  tracker = list;
  for (i = 1; i <length+1; i++) {
    tracker=tracker.next;
  }
  return tracker;
}
