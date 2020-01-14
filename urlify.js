/*Write method to replace all spaces ina string with '%20' assuming that the string has sufficient space at the end to hold the additional characters, 
and that you are given the 'true' length of the string 
ex: input =  'Mr John Smith       ' 13
    output = 'Mr%20John%20Smith%20' 13
Thus meaning that the length of the new string should stay the same size

X get length of original string or not really because problem says to assume there's enough string space AND THE LENGTH IS ALREADY GIVEN
split into an array
for all index with one or more spaces, insert one %20 into that first space. Check length of array. Remove all spaces that's more than 1 placement length
we're assuming that there's the right mount of space for %20 so don't have to count spaces, we're assuming there's equal number of extra space for the %20 to overwrite
ex2: 'H  I  word Yo       A'
*/

var urlify = (str, length) => {
// iterate through str, add original character to string until hit a space
//add %20 to that space and continue down line 
//skip if the adj character is also a space until reach a character again then add the character to the string etc

  //first check if first element is a space then loop through the rest
  var url = ''
  if (str[0] === ' ') {
    url = '%20';
  } else {
    url = str[0];
  }
  for (var i = 1; i < str.length; i++) {
    //check if prev el was a space, if so and curr el is a space then skip
    if (str[i-1] === ' ' && str[i] === ' '){
      continue;
    } else if (str[i] === ' ') {
      url = url + '%20'
    } else {
      url = url.concat(str[i])
    }
    //if curr el is char then add to str
    //if prev el was not a space and cur char is a space then add %20
  } 
  if (url.length !== length) {
    return 'wrong length'
  }
  return url
}

console.log(urlify('H  I  word Yo       A   ',24))


// Big O(N)