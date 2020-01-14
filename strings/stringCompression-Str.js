/*Perform basic string compression using the counts of repeated characters. 
ex: aabcccccaa would be a2b1c5a2
if "compressed" string would not become smaller than the original string, your method should return the original string (aka if all are 1 character without dups in a row)
Can assume the string has only uppercase and lowercase letters 
Meaning upper case is not same as lower case
*/

var strComp = str => {
  var currChar = str[0];
  var count = 1;
  var compStr = '';
  if (str.length === 0) {
    return 'empty string'
  } else {
    for (var i = 1; i < str.length; i++) {
      if (currChar !== str[i]) {
        compStr = compStr.concat(currChar, count.toString());
        currChar = str[i];
        count = 1;
      } else {
        count++;
      }
    }
    compStr = compStr.concat(currChar, count.toString());
  }
  //compare current string with compressed string length and return original string if lengths equal
  if (compStr.length >= str.length) {
    return str;
  } 
  return compStr;
}


console.log(strComp('abcde'))