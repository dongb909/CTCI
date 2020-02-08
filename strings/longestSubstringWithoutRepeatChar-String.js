// Given a string, find the length of the longest substring without repeating characters.

// let nonRepeating = string => {
//   let characterStorage = {};
//   characterStorage[string[0]] = 1;
//   let nonRepeatingString = string[0];
//   for (let i = 1; i < string.length; i++) {
//     if (!characterStorage.hasOwnProperty(string[i])){
//       nonRepeatingString = nonRepeatingString + string[i]
//       characterStorage[string[i]] = 1;
//     } else {
//       return nonRepeatingString;
//     }
    
//   }
//   return nonRepeatingString;
// }

// // console.log(nonRepeating('babcb'))

// let findLongestNonRepeatingSubstring = string => {
//   let longestNonRepeatingString = '';
//   while (string.length > longestNonRepeatingString.length) {
//     let currentLongestNonRepeat = nonRepeating(string)
//     if (currentLongestNonRepeat.length > longestNonRepeatingString.length) {
//       longestNonRepeatingString = currentLongestNonRepeat
//     }
//     string = string.slice(1)
//   }
//   return longestNonRepeatingString
// }

// console.log(findLongestNonRepeatingSubstring('bbb'))



let nonRepeating = string => {
  let characterStorage = {};
  characterStorage[string[0]] = 1;
  let count = 1
  for (let i = 1; i < string.length; i++) {
    if (!characterStorage.hasOwnProperty(string[i])){
      count++
      characterStorage[string[i]] = 1;
    } else {
      return count;
    }
    
  }
  return count;
}

// console.log(nonRepeating('babcb'))

let findLongestNonRepeatingSubstring = string => {
  let nonRepeatingCount = 0;
  while (string.length > nonRepeatingCount) {
    let currentCount = nonRepeating(string)
    if (currentCount > nonRepeatingCount) {
      nonRepeatingCount = currentCount
    }
    string = string.slice(1)
  }
  return nonRepeatingCount
}

console.log(findLongestNonRepeatingSubstring('bzcbabcb'))