// Leetcode 1180. Count Substrings with Only One Distinct Letter

// Given a string s, return the number of substrings that have only one distinct letter.

// Input: s = "aaaba"
// Output: 8
// Explanation: The substrings with one distinct letter are "aaa", "aa", "a", "b".
// "aaa" occurs 1 time.
// "aa" occurs 2 times.
// "a" occurs 4 times.
// "b" occurs 1 time.
// So the answer is 1 + 2 + 4 + 1 = 8.


s = "aaaaaaaaaa"

const countLetters = (s) => {
  sArr = s.split('')
  score = 0
  sArr.map((letter, i) => {
    distinctArr = []
    if (letter === sArr[i-1] ) {
      distinctArr.push(letter)
      score +=1
    }
    score += 1
  })
  return score
}

console.log(countLetters(s))