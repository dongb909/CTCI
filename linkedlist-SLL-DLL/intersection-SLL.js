/*Give 2 SLL, determine if the 2 lists intersect.
Return the intersecting node.
Note that the intersection is defined based on REFERENCE, NOT VALUE
That is, if the kth node of the 1st LL is the exact same node (by reference) as the jth node of the 2nd LL, then they are intersecting
*/
// I: 2 LL 
// O: Node
// E: one is null, 
// C: only 1 intersection
class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

var intersection = (list1, list2) => {
  if (list1 === null || list2 === null) {
    return null //null because they want you to return a node reference, so even if you don't find an intersection, you should still return a node
  }
  var ptA = list1;
  var ptB = list2;
  while (ptA !== null) {
    while(ptB !== null) {
      if (ptA === ptB) {
        return ptA
      } else {
        ptB = ptB.next;
      }
    }
    ptA = ptA.next
  }
  return null 
}

