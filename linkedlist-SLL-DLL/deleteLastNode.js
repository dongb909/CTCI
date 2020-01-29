class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

var delLast = list => {
  if (list === null) {
    return null
  } else {
    var ptr = list;
    while (ptr.next !== null) {
      if (ptr.next.next === null) {
        ptr.next = null;
      } else {
        ptr = ptr.next;
      }
    }
  }
  return list
}

var mylist = a;
var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');


mylist = a;
a.next = b
b.next = c;
c.next = d;

console.log(mylist)
console.log(delLast(mylist))
console.log(delLast(mylist))