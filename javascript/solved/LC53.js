// Leetcode#53 - Maximum Subarray

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubArray = (nums) => {
  let curSubArr = nums[0];
  let maxSubArr = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];

    curSubArr = Math.max(num, curSubArr + num);
    maxSubArr = Math.max(maxSubArr, curSubArr);
  }
  return maxSubArr;
};

console.log(maxSubArray(nums));
