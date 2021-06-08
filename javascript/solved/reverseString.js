
const reverseString = (str) => {
  splitString = str.split('')
  reversedStrArr = []
  splitString.forEach((letter) => {
    reversedStrArr.unshift(letter)
  })
  return reversedStrArr.join('')
}

console.log(reverseString('Hello'))