// Leetcode 1119 - remove vowels from a string

// Input: s = "leetcodeisacommunityforcoders"
// Output: "ltcdscmmntyfrcdrs"

s = "leetcodeisacommunityforcoders"

const removeVowels = (s) => {
  // let vowels = ['a', 'e', 'i', 'o', 'u']
  let noVowelsArr = []
  let sArr = s.split("")
  let newArr = sArr.filter( letter => {
    if(letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u') {
      return noVowelsArr.push(letter)
    }
  })
  return newArr.join("")
}



console.log(removeVowels(s))