//Question: are 2 strings permutations of each other?
//Assume all are alphabetical characters


//Declare function
var isPermutation = (string1, string2) => {
//if lengths aren't equal then return false
  if (string1.length !== string2.length) {
    return false;
  } else { 
    //turn string2 to array to use spliceing and indexOf
    var string2Arr = string2.split('');
    //iterate through string1
    for (var i = 0; i < string1.length; i++) {
      //find current character in string2, if not found then return false
      //create temp place holder for index number
      var charIndex = string2Arr.indexOf(string1[i])
      if (charIndex === -1) {    //must specify -1 because it's not a boolean thing
        return false;
      } else {
        //use the index to splice the arr
        string2Arr.splice(charIndex,1);
        console.log(string2Arr);
      }
    }
  }
  return true;
}

console.log(isPermutation('abccef', 'dcefab'))


// Big O(N)


//Book Solution reimplementation
//sorting each string and then seeing if they equal

var CTCIsolutionPractice = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  } 
  var str1sorted = str1.split('').sort().join();
  var str2sorted = str2.split('').sort().join('');

  if (str1sorted === str2sorted){
    return true
  }
  return false
}

console.log(CTCIsolutionPractice('adbce', 'dbeca'))

//bigO(n log n)