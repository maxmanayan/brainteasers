// Leetcode #28 - Implement strStr()

// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf

// Input: haystack = "hello", needle = "ll"
// Output: 2

let haystack = "hello";
let needle = "lo";

const strStr = (haystack, needle) => {
  if (!needle) {
    return 0;
  } else {
    let splitHaystack = haystack.split(needle);
    return splitHaystack[0].length !== haystack.length
      ? splitHaystack[0].length
      : -1;
  }
};

console.log(strStr(haystack, needle));
