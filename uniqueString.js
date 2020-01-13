// Question: Does string have all unique characters?
//ex: string1 = 'jlkfsd' ==> true
//ex: string2 = 'aabbcc' ==> false
//assuming all are alphabetical characters 

// Solution 1, using additional data structure aka object
//Declare function
var isUnique1 = string => {
  //Declare empty object
  var char = {};
//Iterate through string
  for (var i = 0; i < string.length; i ++) {
    //check to see if character already in obj
    //if yes then return false
    console.log(char)
    if (char.hasOwnProperty(string[i]) === true) {
      return false
    } else {
      //else add character to obj and set to 1
      char[string[i]] = 1
      console.log(char)
    }
  }
  //if go through end of string then return true
  return true
}
// console.log(isUnique1('abccdefg'))

//Big O (N)

//========================================================================
// Solution 2, no additional structures used

//Declare function
var isUnique2 = string => {
//Iterate through string (i)
  for (var i = 0; i < string.length; i++) {
      //iterate through remaining characters (j) to see if match
    for (var j = i+1; j < string.length; j ++) {  
       //NOTE: j should be i+1 or else if just put j = 1, then after the first loop, both i and j will equal one and false is returned
       //if match then break and return false
       console.log(string[i], '======', string[j])
      if (string[i] === string[j]) {
        return false
      } 
    }
  }
  //if complete then return true
  return true
}

console.log(isUnique2('abccde'))

// Big O(N^2)