// Write a function that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

// For example, given

//     A = [3, 8, 9, 7, 6]
//     K = 3
// the function should return [9, 7, 6, 3, 8]. Three rotations were made:

//     [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
//     [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
//     [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]

//  link = [ https://app.codility.com/demo/results/trainingCCANVT-R6W/ ]

let sampleArray = [3, 8, 9, 7, 6];
let sampleLimit = 3;

const cyclicRotation = (A, K) => {
  if (A.length === 0) return A;
  const array = [...A];
  let counter = 0;
  while (counter < K) {
    const lastNum = array.pop();
    array.unshift(lastNum);
    counter += 1;
  }
  return array;
};

console.log(cyclicRotation(sampleArray, sampleLimit));
