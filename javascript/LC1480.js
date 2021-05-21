// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 
nums = [1,2,3,4]

const runningSum = (nums) => {
  sumNums = []
  nums.reduce((acc, num) => {
    let sum = acc + num
    sumNums.push(sum)
    return acc + num
  },0)
  return sumNums
}


console.log(runningSum(nums))