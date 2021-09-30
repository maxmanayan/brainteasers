// A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

// S is empty;
// S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// For example, the string "{[()()]}" is properly nested but "([)()]" is not.

// Write a function:

// function solution(S);

// that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

// For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..200,000];
// string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".

// link - [ https://app.codility.com/demo/results/trainingZ4ZH5K-6F6/ ]

const sample = "{[()()]}";

const brackets = (S) => {
  if (S.length < 1) return 1;
  if (S.length === 1 || S.length % 2 !== 0) return 0;
  const sArray = S.split("");
  const stack = [];
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let i = 0; i < sArray.length; i++) {
    let bracket = sArray[i];
    if (bracket === "(" || bracket === "[" || bracket === "{") {
      stack.push(bracket);
    } else if (stack[stack.length - 1] === map[bracket]) {
      stack.pop();
    } else {
      return 0;
    }
  }
  return !stack.length ? 1 : 0;
};

console.log(brackets(sample));
