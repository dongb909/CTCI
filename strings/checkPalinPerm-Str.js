/* Given a string, check if it's a permutation of a palindrome
Palindrome = a word or phrase that is the same forwards and backwards. 
Permutation = a rearragement of the same letters
The palindrome does not need to be limited to just dictionary words. 
You can ignore casing and non-letter characters
*/

//given ONLY 1 string that's jumbled and see if it can make a palindrome
//so you can't reverse right now. Have to check if it's a palindrome even when jumbled

//In case of a phrase, split it by spacing into a compact string OR skip over the spacing when iterating 
  //if make it a compact string then can reverse it and set equal to check if palindrome since the start without even making an obj. (best)
//add each character to an object
//if number of characters are even
  //if all characters are even then it can be made into a palindrome
  //or else it's not

//if number of characters are odd
//all characters must be even except 1 which must be odd
//if more than 1 character is odd then false


let isPalindrome = function(string) {
  let stringReversed = string.split('').reverse().join('');
  if (string !== stringReversed) {
  return false;
}
return true;
};


let storeCharacters = string => {
  let charCount = {}
  for (let i = 0; i < string.length; i++) {
    if (!charCount.hasOwnProperty(string[i])) { //if false meaning not found
      charCount[string[i]] = 1;
    } else {
      charCount[string[i]]++;
    }
  }
  return charCount
}


let isPalinPerm = startingString => {
  //this part isn't necessary but only if you want it to go fast just in case.
  let compactString = startingString.replace(/[^0-9a-z]/gi, '').toLowerCase();
  if (isPalindrome(compactString)) {
    return true
  } else {
    let characterStored = storeCharacters(compactString)
    let oddCount = 0;
    for (let key in characterStored) {
      console.log (characterStored[key]%2)
      if (characterStored[key] % 2 !== 0) { //if k's value is not even
      console.log(oddCount)
        oddCount++;
      } 
      if (oddCount > 1) {
        return false;
      }
    }
  }
  return true;
}


console.log(isPalinPerm('Was t  A fbcat  Saw'))

