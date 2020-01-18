/* Partition a linked list around a value x, such that all nodes < x come before all nodes >=x.
(IMPORTATANT: the partition element x can appear anywhere in the 'right partition'; it does not need to appear btwn the L and R partitions
The additional spacing and example below indicates the partition)
ex: input: 3 5 8 5 10 2 1[partition=5]
output: 3 1 2  => 10 5 5 8
*/

//I: SLL, x
//O: SLL
//E: if all is larger or all is smaller, ll is null, ll only has 1 number
//C: n/a
//x=0 doesn't matter bc there might be negative numbers
//if know that there's no negative numbers then go ahead and return list if x = 0
//one option is to create a smaller list and larger list both with it's own tracker and then combine but that's a lot of variables
class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

var partition = (list, x) => {
 if (list === null) {
   return null
 } 

 var tracker = list; 
 var smaller = null;
 var bigger = null;
 while (tracker !== null) {
   if (tracker.data < x && smaller === null) {
    smaller = tracker;
    var st = smaller
   } else if (tracker.data < x) {
     st.next = tracker;
     st = st.next;
   } else if (tracker.data >= x && bigger === null) {
     bigger = tracker;
     var bt = bigger
   } else if (tracker.data >= x) {
     bt.next = tracker;
     bt=bt.next
   }
   tracker = tracker.next
 }
 st.next = bigger;
 return smaller
}


var a = new Node(9);
a.next = new Node(6);
a.next.next = new Node(3);
a.next.next.next = new Node(5)
a.next.next.next.next =   new Node(2)

console.log(partition(a, 5))
