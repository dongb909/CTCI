/* There are 3 types of edits that can be performed on strings:
    -insert a character
    -remove a character
    -replace a character
    Given 2 strings, write a function to check if they are one edit (or zero edits) away 
  ex: pale, ple => true
      pales, pale => true
      pale, bale => true
      pale, bake => false
*/

//get length of each str
//check if length difference > 1 then return false
//if length equal, 
//check if both equal aka 0 edit
//iterate through each character and count number of different index
//if count > 1 then false

//if not equal length then check if indexes equal (skipping over 1 index if not equal)
//count number of skips
//if > 1 then false
var oneEdit = (str1, str2) => {
  var len1 = str1.length;
  var len2 = str2.length;
  //IF EQUAL LENGTH
  if (len1 === len2) {
    var charDiff = 0;
    var i = 0
    while (i < len1) {
      if (charDiff > 1) {
        return false;
      } else if (str1[i]!==str2[i]) {
        charDiff++;
      } 
      i++
    }
    return true;
  }
  
  //IF LENGTH DIFFERENCE IS > 1
  if (Math.abs(len1 - len2) > 1) {
    return false;
  }
  //ELSE CHECK IF ALL CHAR OF SHORTEST IS IN LONGEST
  var big = str1;
  var small = str2;
  if (len2 > len1) {
    big = str2;
    small = str1;
  } 
  var i = 0
  while (i < small.length) {
    if (big.indexOf(small[i]) === -1) {
      return false;
    } else {
      i++;
    }
  }
  return true;
}

// console.log(oneEdit('pale','uile')) //check equal length
console.log(oneEdit('bake', 'bale')) //check unequal length