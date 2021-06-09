// Fizz buzz is a group word game for children 
// to teach them about division. Players take 
// turns to count incrementally, replacing any 
// number divisible by three with the word 
// "fizz", and any number divisible by five 
// with the word "buzz". 


startingNum = 0

const fizzBuzz = (num) => {
  numArr = []
  for (num; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 !== 0 ) {
      numArr.push('fizz')
    } else if ( num % 5 === 0 && num % 3 !== 0) {
      numArr.push('buzz')
    } else if (num % 5 === 0 && num % 3 === 0) {
      numArr.push('fizzbuzz')
    } else {
      numArr.push(num)
    }
  }
  return numArr.join(' ')
}


console.log(fizzBuzz(startingNum))