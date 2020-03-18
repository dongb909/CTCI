/* Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

Example 1:

Input: [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
Example 2:

Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Notes:

1 <= A.length = A[0].length <= 20
0 <= A[i][j] <= 1 */

//THIS ONE DID NOT CHECK FOR ODD OR EVEN THAT'S WHY IT'S SHORTER
// let flipInvertRow = row => {
//   for (let j = 0; j < Math.ceil(row.length/2); j++) {
//     let rightIndex = row.length-1 -j
//     let temp = row[j];
//     row[j] = (row[rightIndex] === 1)? 0 : 1;
//     row[rightIndex] = (temp === 1)? 0 : 1;
//   }
//   return row;
// }

// var flipAndInvertImage = function(A) {
//   for (let i = 0; i < A.length; i++) {
//     flipInvertRow (A[i])
//   }
//   return A
// };

let matrix = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
//answer [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// console.log(flipAndInvertImage(matrix))


const invertNflip = (row) => {
  let length = Math.ceil(row.length/2);
  if (length % 2 === 1) {
    //NOT length bc have to account for 0 index!
    row[length-1] = (row[length-1] === 1)? 0:1;
    length = length - 1;
  }
  let indexFromEnd = row.length - 1
  //still length bc factor in the 0 index
  for (let i = 0; i < length; i++) {
    let placeholder = (row[i]===1)? 0:1;
    row[i] = (row[indexFromEnd] === 1)? 0:1;
    row[indexFromEnd] = placeholder;
    indexFromEnd -= 1;
  }
  return row;
}

const flipImage = (arr)=> {
  arr.forEach(row => {
    return invertNflip(row)
  });

  return arr;
}

console.log(flipImage(matrix));
// let test = [1,2,3,4,5]
// console.log(invertNflip([1,0,0,1,0]))
//[1,0,1,1,0]

// console.log(test[-1])
//NO SUCH THING AS NEGATIVE INDEX IN JS, ONLY IN PYTHON. JS HAS IT FOR SLICING BUT THAT'S IT, NOT EVEN FOR STRINGS