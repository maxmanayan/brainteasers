// Write a function that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap

const sampleData = 1041;

const binaryGap = (N) => {
  const binaryN = N.toString(2).split("");
  let longestGap = 0;
  let counter = 0;
  for (let i = 0; i < binaryN.length; i++) {
    const num = binaryN[i];
    const nextNum = binaryN[i + 1];
    if (num === "0") {
      counter += 1;
    }
    if (num === "0" && nextNum === "1") {
      if (counter > longestGap) longestGap = counter;
      counter = 0;
    }
  }
  return longestGap;
};

console.log(binaryGap(sampleData));
