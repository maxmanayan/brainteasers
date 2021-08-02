// Leetcode#13 Roman to Integer

// Given a roman numeral, convert it to an integer.

// Input: s = "III"
// Output: 3

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const translation = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

let s = "CMXCIV";

const romanToInt = (s) => {
  let sArr = s.split("");
  let total = 0;
  for (let i = 0; i < sArr.length; i++) {
    let curNum = sArr[i];
    let nextNum = sArr[i + 1];

    if (sArr.length - i > 1 && translation[curNum] < translation[nextNum]) {
      total = total + (translation[nextNum] - translation[curNum]);
      i += 1;
    } else {
      total = total + translation[curNum];
    }
  }
  return total;
};

console.log(romanToInt(s));
