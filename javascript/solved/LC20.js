// Leetcode#20 - Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Input: s = "()"
// Output: true

// Input: s = "([)]"
// Output: false

// Input: s = "{[]}"
// Output: true

s = "([)]";

const isValid = (s) => {
  if (s.split("").length % 2 !== 0) {
    return false;
  }
  let count = 0;
  let maxCount = s.split("").length / 2;
  let validBrackets = ["[]", "{}", "()"];
  let sTest = s;
  let sTestMeasure = sTest;
  validBrackets.forEach((bracket) => {
    sTest = sTest.replace(bracket, "");
  });
  while (count < maxCount) {
    if (sTestMeasure !== sTest && sTest !== "") {
      sTestMeasure = sTest;
      validBrackets.forEach((bracket) => {
        sTest = sTest.replace(bracket, "");
      });
      count += 1;
    } else if (sTest === "") {
      return true;
    } else {
      return false;
    }
  }
};

console.log(isValid(s));
