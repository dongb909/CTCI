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
*/ //have to flip this first and then do the same as above because there's no other way of knowing what place each digit is and how long. 