// Leetcode#9 - Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Input: x = 121
// Output: true

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

x = 12221;

const isPalindrome = function (x) {
  let xArr = String(x).split("");
  let xArrReversed = [];
  xArr.forEach((num) => {
    xArrReversed.unshift(num);
  });
  if (xArr.join("") === xArrReversed.join("")) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(x));
