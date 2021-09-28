// A non-empty array A consisting of N integers is given.

// A permutation is a sequence containing each element from 1 to N once, and only once.

// For example, array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// is a permutation, but array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// is not a permutation, because value 2 is missing.

// The goal is to check whether array A is a permutation.

// Write a function:

// function solution(A);

// that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

// For example, given array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// the function should return 1.

// Given array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// the function should return 0.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [1..1,000,000,000].

// link - [ https://app.codility.com/demo/results/trainingWCBNAZ-AYV/ ]

const sampleArr = [4, 2, 1, 3];

const permCheck = (A) => {
  if (!A.length) return 0;
  if (A.length < Math.max(...A)) return 0;
  let goalSum = 0;
  for (let num = 1; num <= A.length; num++) {
    goalSum += num;
  }
  let curSum = 0;
  const map = {};
  for (const num of A) {
    if (!map[num]) {
      map[num] = 1;
      curSum += num;
    } else {
      return 0;
    }
  }
  return curSum === goalSum ? 1 : 0;
};

console.log(permCheck(sampleArr));
