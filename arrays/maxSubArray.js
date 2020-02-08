/*Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle. */
var maxSubArray = function(nums) {
  let max=nums[0]
  for (let i=0 ; i < nums.length;i++) {
      for (let j= nums.length; j>i; j--) {
          let currSum = nums.slice(i,j).reduce(((acc,currVal) => acc+currVal),0)
          if (currSum > max) {
              max = currSum
          }
      }
  }
  return max
};

console.log(maxSubArray([111,1]))
