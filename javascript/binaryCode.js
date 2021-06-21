

S = "011100"

const solution = (S) => {
  // let baseTenNum = 0
  // let sArray = S.split('').map((n) => Number(n))
  // let binaryPowFirstHalf = sArray.length - 1
  // let sArrayHalf = Math.ceil(sArray.length / 2)

  // sFirstHalf = sArray.splice(0, sArrayHalf)
  // sSecondHalf = sArray.splice(-sArrayHalf)

  // let binaryPowSecondHalf = sSecondHalf.length - 1

  // sFirstHalf.forEach((num) => {
  //   baseTenNum += (num * (2 ** binaryPowFirstHalf))
  //   binaryPowFirstHalf -= 1
  // })
  // sSecondHalf.forEach((num) => {
  //   baseTenNum += (num * (2 ** binaryPowSecondHalf))
  //   binaryPowSecondHalf -= 1
  // })

  // baseTenNum = parseInt(S, 2)

  // baseTenNum = 10000000000000000
  let count = 0

  // while (baseTenNum > 10000000000000000) {
  //   baseTenNum = baseTenNum - 1000
  //   count += 42
  // }

  while (baseTenNum > 0) {
    if(baseTenNum % 2 === 0) {
      baseTenNum = baseTenNum / 2
      count += 1
    } else if (baseTenNum > 0 && baseTenNum % 2 !== 0) { 
        baseTenNum = baseTenNum -1
        count += 1
    }
  }

  return count
}


console.log(solution(S))


// let baseTenNum = 0
//     let sArray = S.split('').map((n) => Number(n))
//     let binaryPow = sArray.length - 1
//     sArray.forEach((num) => {
//         baseTenNum += (num * (2 ** binaryPow))
//         binaryPow -= 1
//     })

//     let count = 0

//     while (baseTenNum > 0) {
//         if(baseTenNum % 2 === 0) {
//         baseTenNum = baseTenNum / 2
//         count += 1
//         } else if (baseTenNum > 0 && baseTenNum % 2 !== 0) { 
//             baseTenNum = baseTenNum -1
//             count += 1
//         }
//     }

//     return count