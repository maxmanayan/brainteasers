// Leetcode 1281. Subtract the Product and Sum of Digits of an Integer

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.


// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

n = 234

const subtractProductAndSum = (n) => {
  let numberArr = []
  numArr = String(n).split('').map((num) => Number(num))
  let sum = numArr.reduce((acc, num) => {
    return acc + num
  },0)
  let product = 1
  numArr.map((num) => {
    return product = product * num
  })
  let result = product - sum
  return result
}


console.log(subtractProductAndSum(n))