/* You have 2 nums represented by a linked list, where each node contains a single digit
The digits are stored in REVERSE order, such that the 1's digit is at the head of the list.
Write a function that adds the 2 nums and returns the sum as a linked list
(you're NOT allowed to "cheat" and just convert the linked list to an integer)

ex: 
I: (7 1 6) + (5 9 2)     so that's 617 + 295
O: 2 1 9    aka 912

F/U: Suppose the digits are stored in forward order. Repeat the above prob
I: (6 1 7) + (2 9 5)    617 + 295 still
O: 912      aka 912
C: n/a
E: if not lists are null, if 1 is null from the start, if one is shorter than the other (remember to still carry over the 1), if there's more nodes than the longest list
*/ 
//You're first thought was to flip it with an array but you don't have to. the head is always the ones (plus, it's in the description that you can't do that)
 //it's a single digit so you know the largest number the sum can be is 18, thus if sum > 9 then you're always only going to carry over a 1
//NEVER forget about the 1!!

class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

// var addNext = (currSum) => { ORIGINALLY CREATED ADDNEXT HERE BUT THE CARRY VARIABLE IS IN ITS OWN SCOPE, MUST EITHER DEFINE CARRY OUT IN GLOBAL OR PUT FUNCTION INSIDE ADDLIST


var addLists = (num1, num2) => {
  var num3 = null
  if (num1 === null && num2 === null) {
    return num3;
  } else if (num1 === null) {
    num3 = num2;
    return num3;
  } else if (num2 === null) {
    num3 = num1;
    return num3;
  } else {
    var pt1 = num1.next;
    var pt2 = num2.next;
    var sum = num1.data + num2.data;
    var carry = 0;
    //make the head node first
    if (sum < 10) {
      num3 = new Node(sum)
    } else {
      carry = 1;
      num3 = new Node(sum-10);
    }
    pt3 = num3;
  }
  // console.log(carry)
//add the rest to list
  var addNext = (currSum) => {
    if (currSum <10) {
      pt3.next= new Node(currSum);
    } else {
      carry = 1;
      pt3.next = new Node(currSum-10);
    }
    return 
  }

  while (pt1 !== null && pt2 !== null) {
    sum = pt1.data + pt2.data + carry;
    // console.log(carry)
    carry = 0;
    addNext(sum)
    pt1 = pt1.next;
    pt2 = pt2.next;
    pt3 = pt3.next;
    // console.log('heyyyy')
    console.log(carry)
  } 
  if (pt1 === null && pt2 ===null && carry === 1) {
    pt3.next = new Node (1);
    console.log('hiiiiiii')
  } else if (pt1 === null) {
    while (pt2 !== null) {
      sum = pt2.data + carry;
      console.log(carry)
      addNext(sum);
      console.log('hiiiiiii1')
    }
  } else { //pt2 === null
    while (pt1 !== null) {
      sum = pt1.data + carry;
      console.log(carry)
      addNext(sum);
      console.log('hiiiiiii2')
    }
  }
  return num3
}



var first = new Node(7);
first.next = new Node(1);
first.next.next = new Node(6);
var sec = new Node(5);
sec.next = new Node(9);
sec.next.next = new Node(2);
console.log(addLists(first, sec))