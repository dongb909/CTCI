/*Assume you have a method isSubstring which checks if one word is a substring of another. 
Given 2 strings s1 and s2, write code to check if s2 is a rotation of s1 using only 1 call to isSubstring
ex: 'waterbottle' is rotation of 'aterbottlew' */
//NOTE HOW THEY SPECIFIED WHICH STRING IS ROTATION OF WHICH!
//ALSO THEY ALREADY NAMED THE FUNCTION FOR YOU SO DO NOT RENAME

//duplicate str1 and combine into one. Then check if the str2 is a substring of str1 with method "includes"

var isSubstring = (s1, s2) => {
  //if strings aren't equal or if empty then false 
  if (s1.length === 0 || s2.length === 0 || s1.length !== s2.length) {
    return false;
  } 
  s1 = s1 + s1;
  if (s1.includes(s2)) {
    return true;
  }
  return false;
}
console.log (isSubstring('waterbottle', 'aterbottlew'))