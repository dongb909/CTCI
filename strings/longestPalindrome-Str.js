/*Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer. */

let isPalindrome = string => {
  let reverseString = string.split('').reverse().join('');
  return (string === reverseString);
}

// console.log(isPalindrome('aba'))

let findLongestPalindrome = string => {
  let longestPalindrome = '';
  for (let i = 0; i < string.length; i++) {
    for (let j = string.length; j > i; j--) {   //can stop j when it reaches i instead of 0
      let substring = string.slice(i, j);
      if (isPalindrome(substring)) {
        longestPalindrome = (substring.length > longestPalindrome.length) ? substring : longestPalindrome;
      } 
    }
  }
  return longestPalindrome
}

console.log(findLongestPalindrome('ab'))