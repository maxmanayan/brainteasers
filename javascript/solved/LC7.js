// Leetcode #7 - Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// Input: x = 123
// Output: 321

// Input: x = -123
// Output: -321

// Input: x = 120
// Output: 21

x = 0;

const reverse = (x) => {
  const limit = 2147483648;
  const k = x < 0 ? -1 : 1;
  const numReversed = Number(String(Math.abs(x)).split("").reverse().join(""));
  return numReversed > limit ? 0 : numReversed * k;
};

console.log(reverse(x));
