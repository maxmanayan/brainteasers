// Leetcode 771. Jewels and Stones

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

jewels = "aA"
stones = "aAAbbbb"

const numJewelsInStones = (jewels, stones) => {
  let jewelsArr = jewels.split('')
  let stonesArr = stones.split('')
  let numJewels = 0
  jewelsArr.forEach((jewel) => {
    stonesArr.forEach((stone) => {
      if (jewel === stone) {
        numJewels += 1
      }
    })
  })
  return numJewels
}

console.log(numJewelsInStones(jewels, stones))