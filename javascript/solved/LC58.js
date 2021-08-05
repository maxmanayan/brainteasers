// Leetcode #58 - Length of Last Word

// Given a string s consists of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Input: s = "Hello World"
// Output: 5

// Input: s = "   fly me   to   the moon  "
// Output: 4

// Input: s = "luffy is still joyboy"
// Output: 6

let s = "luffy is still joyboy";

const lengthOfLastWord = (s) => {
  let sArr = s.trim().split(" ");
  return sArr[sArr.length - 1].length;
};

console.log(lengthOfLastWord(s));
