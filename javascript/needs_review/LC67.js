// Leetcode#67 - Add Binary

// Given two binary strings a and b, return their sum as a binary string.

// Input: a = "11", b = "1"
// Output: "100"

a =
  "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";

b =
  "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";
const addBinary = (a, b) => {
  let sum = parseInt(a, 2) + parseInt(b, 2);
  return sum.toString(2);
};

console.log(addBinary(a, b));
