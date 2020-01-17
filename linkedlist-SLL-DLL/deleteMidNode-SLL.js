/*Delete a node in the middle (ex: any node but the first and last node, not necessarily the exact middle)
of a SLL (Singly Linked List), given only access to that node.
ex: input: node c from the linked list a -> b -> c -> d -> e -> f
result: nothing is returned but the new linked list has no c
*/

//I: LL and a node to delete aka del
//O: nothing but final LL doesn't have that node
//C: n/a
//E: if LL is null, problem says middle so don't have to worry about t.next after the node to be deleted is null nor have to worry about del being the head. 

//Create a tracker as to not lose where the head is aka t
//see as long as t.next is not null while loop will go to end
//leave LL alone and check if t.next = del, if it doesn't then set t = t.next
//else t=t.next.next (no worries about t.next.next equal to null bc the problem specifies middle node.)

class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

var delMiddle = (list, del) => {
  var tracker = list;
  while (tracker.next !== null) {
    if (tracker.next === del) {
      //tracker points to the exact same reference node as LL nodes so change to tracker is going to change the LL nodes too. 
      tracker.next = tracker.next.next; //single node deletion so can return here
      return list
    } else {
      tracker = tracker.next
    }
  }
  return list
}

var mylist = a;
var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
// var e = new Node ('e')

mylist = a;
a.next = b
b.next = c;
c.next = d;


console.log(delMiddle(mylist, c))