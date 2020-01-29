// Given a string, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var currLength = 0;
  var max = 0;
  var uniq = {};
  for (var i = 0; i < s.length; i++) {
      if (s[i] in uniq) {
          if (currLength > max) {
              max = currLength;
          } 
              currLength = 1;
              uniq = {};
              uniq[s[i]] = 1;
          } else {
          uniq[s[i]] = 1;
          currLength++;
      }
  }
  return max
};

var str = "bbbbbbb"

console.log(lengthOfLongestSubstring(str))