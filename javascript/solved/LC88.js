// Leetcode 88 - Merge Sorted Array

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

nums1 = [1, 2, 3, 0, 0, 0];
m = 3;
nums2 = [2, 5, 6];
n = 3;

const merge = (nums1, m, nums2, n) => {
  let lastNum = nums1.length - 1;
  while (nums1[lastNum] === 0) {
    nums1.pop();
    lastNum = nums1.length - 1;
  }

  nums2.map((num) => {
    nums1.push(num);
  });

  nums1.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  while (nums1.length < m + n) {
    nums1.push(0);
  }
  return nums1;
};

console.log(merge(nums1, m, nums2, n));
