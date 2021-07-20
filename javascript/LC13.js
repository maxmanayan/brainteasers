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

let s = "III";

const romanToInt = (s) => {
  let sArr = s.split("");
  let total;
  for (let i = 0; i < sArr.length; i++) {
    console.log(typeof translation.I, sArr[i]);
  }
  return sArr;
};

console.log(romanToInt(s));
