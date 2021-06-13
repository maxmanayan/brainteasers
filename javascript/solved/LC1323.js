// Leetcode 1323. Maximum 69 Number

// Given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

// Input: num = 9669
// Output: 9969
// Explanation: 
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666. 
// The maximum number is 9969.


num = 9669

const maximum69Number = (num) => {
  let numArr = String(num).split('').map((num) => Number(num))
  let indexOf6 = numArr.indexOf(6)
  let newNumArr = []
  numArr.map((num, i) => {
    if (i === indexOf6) {
      newNumArr.push(9)
    } else {
      newNumArr.push(num)
    }
  })
  return newNumArr.join('')
}


console.log(maximum69Number(num))