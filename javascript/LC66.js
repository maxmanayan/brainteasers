// Leetcode #66 - Plus One

// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// Input: digits = [0]
// Output: [1]

digits = [9, 9, 9];

const plusOne = (digits) => {
  let n = digits.length;

  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }

  let ifNines = digits.unshift(1);

  return digits[0] === 0 ? ifNines : digits;
};

console.log(plusOne(digits));
