// return the largest number possible from number given
// if number is larger than 100000000 => return -1
N = 2457683

const solution = (N) => {
  largestN = 
    Number(
        String(N)
        .split('')
        .map((n) => Number(n))
        .sort((a,b) => {
            if (a < b) {
            return 1;
            }
            if (a > b) {
            return -1;
            }
            return 0;
            })
        .join(''))

  if (largestN > 100000000) {
    return -1
  } else {
    return largestN
  }
}

console.log(solution(N))