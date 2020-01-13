//Given a string, check to see if it's a palindrome : a word of phrase that is the same forwards and backwards
//ex: 'abcdcba' odd
//ex: 'abccba' even
//ex: 'Was It A Rat I Saw'

//solution1 : using reverse()

var isPalindrome1 = (str) => {
  var strReversed = str.split('').reverse().join('');
  if (str !== strReversed) {
    return false;
  }
  return true;
}

// console.log(isPalindrome1('acba'))


//solution2: not using reverse but by algorithm
//unshift into an array and then join and set equal
var isPalindrome2 = (str) => {
  var reverseStr = [];
  for (var i = 0; i < str.length; i++) {
    reverseStr.unshift(str[i]);
    // console.log(reverseStr)
  }
  if (str.toLowerCase() !== reverseStr.join('').toLowerCase()) {
    return false;
  }
  return true;
}

// console.log(isPalindrome2('abcdba'))


//sotuion 3, this time assuming the string is a phrase (also works for a word)
//split our all spaces and join to form a compact string and compare the order

var isPalindromePhrase = (phrase) => {
  var compactPhrase = phrase.split(' ').join('');
  var compactReverse = compactPhrase.split('').reverse().join('');
  //don't forget to account for cases
  if (compactPhrase.toLowerCase() !== compactReverse.toLowerCase()) {
    return false;
  }
  return true;
}

console.log(isPalindromePhrase('Was It A Rat I Saw'))