// Leetcode 1672

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation: 
// 1st customer has wealth = 6
// 2nd customer has wealth = 10 
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.

account = [[1,5],[7,3],[3,5]]

const findRichest = (account) => {
  sumArr = []
  account.forEach((person, i) => {
    let sum = person.reduce((acc, num) => {
      return acc + num
    }, 0)
    sumArr.push(sum)
  })
  return Math.max(...sumArr)
}

console.log(findRichest(account))