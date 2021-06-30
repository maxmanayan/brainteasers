// Leetcode 14 - Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

strs = ["flower", "flow", "light"];

const longestCommonPrefix = (strs) => {
  let strsSplit = strs.map((word) => {
    return (splitWord = word.split(""));
  });
  let prefixArray = [];
  let letterCounter = 0;
  let letterHolder = [];
  let keepLooping = true;
  while (keepLooping === true) {
    strsSplit.forEach((word, index) => {
      let letter = word[letterCounter];
      if (index === 0) {
        letterHolder.push(letter);
      }

      if (letterHolder.length < strsSplit.length && index > 0) {
        if (letter === letterHolder[0]) {
          letterHolder.push(letter);
        } else {
          keepLooping = false;
        }
      }

      if (letterHolder.length === strsSplit.length) {
        prefixArray.push(letter);
        letterHolder = [];
        letterCounter += 1;
      }
    });
  }
  if (prefixArray.length > 0) {
    return prefixArray.join("");
  } else {
    return "";
  }
};

console.log(longestCommonPrefix(strs));
