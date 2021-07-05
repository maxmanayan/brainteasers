str = "adebabc";

const firstRepeatingPair = (str) => {
  let strArr = str.split("");
  let counts = {};
  let repeatingLetter = "";

  for (let i = 0; i <= str.length - 1; i++) {
    let currentLetter = strArr[i];
    if (currentLetter in counts) {
      repeatingLetter = currentLetter;
      i += str.length;
    }
    counts[currentLetter] = 1;
  }

  return repeatingLetter;
};

console.log(firstRepeatingPair(str));
