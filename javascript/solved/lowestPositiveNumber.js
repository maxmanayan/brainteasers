// find the lowest positive number (1+) in an array

A = [-1, -3]

const solution = (A) => {
  let sortedArr = A.sort((a,b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }).filter((num) => num >= 1)
  let newArr = []

  let lowestNum = 1
  sortedArr.forEach((num,i) => {
    lastNum = sortedArr[i-1]
    
    if (sortedArr[0] > 1) {
      lowestNum = 1
    } else if (num - lastNum >= 2) {
      newArr.push(lastNum)
      lowestNum = (Math.min(...newArr) + 1)
    } else {
      lowestNum = Math.max(...sortedArr) + 1
    }
  })


  return lowestNum
}



console.log(solution(A))