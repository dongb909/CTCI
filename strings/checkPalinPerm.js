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

var isPalinPerm = phrase => {
  //check if the str / phrase already is a palindrome
  //REMEMBER TO ACCOUNT FOR CASES!!!!
  var compact = phrase.split(' ').join('').toLowerCase();
  var reversed = compact.split('').reverse().join('');
  if (compact === reversed) {
    return true;
  } else {
    //iterate through phrase and add each character to obj while counting up
    var charCount = {}
    for (var i = 0; i < compact.length; i++) {
      if (!charCount.hasOwnProperty(compact[i])) { //if false meaning not found
        charCount[compact[i]] = 1;
      } else {
        charCount[compact[i]]++;
      }
    }
    console.log(charCount)
    //don't have to check length, just check that all values are even or that there's no more than 1 value that's an odd value once iteration is complete
    //check each value by iterating through obj keys
    //assign an odd counter
    var oddCount = 0;
    for (var key in charCount) {
      console.log (charCount[key]%2)
      if (charCount[key] % 2 !== 0) { //if k's value is not even
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


console.log(isPalinPerm('Was t  A Rat  Saw'))

