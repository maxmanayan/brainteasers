// Leetcode#26 - Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

nums = [1, 1, 2, 4];

const removeDuplicates = (nums) => {
  let numObject = {};
  let newNums = [];
  for (let i = 0; i < nums.length; i++) {
    let curNum = nums[i];
    if (numObject[curNum]) {
      continue;
    } else {
      newNums.push(curNum);
      numObject[curNum] = 1;
    }
  }
  return newNums;
};

console.log(removeDuplicates(nums));
