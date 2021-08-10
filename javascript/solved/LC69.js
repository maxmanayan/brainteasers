// Leetcode #69 - Sqrt(x)

// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

// Input: x = 4
// Output: 2

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

let x = 5;

const mySqrt = (x) => {
  if (x < 2) return x;

  let num, pivot;
  let left = 2;
  let right = Math.trunc(x / 2);

  while (left <= right) {
    pivot = Math.trunc(left + (right - left) / 2);
    num = pivot * pivot;
    if (num > x) right = pivot - 1;
    else if (num < x) left = pivot + 1;
    else return pivot;
  }

  return right;
};

console.log(mySqrt(x));
