// Leetcode#125 - Valid Palindrome

// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

s = "A man, a plan, a canal: Panama";

let letterLibrary = {};

const isPalindrome = (s) => {
  let sArray = s
    .replace(/[^0-9a-z]/gi, "")
    .split("")
    .map((letter) => letter.toLowerCase());
  let sArrayReversed = [];
  sArray.map((letter) => {
    sArrayReversed.unshift(letter);
  });
  if (sArray.join("") === sArrayReversed.join("")) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(s));
