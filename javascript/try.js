// let x = ["1", "2", "15", "-7", "300"];

// let y = x.sort();

// console.log(y);

// function find_mistake(nums) {
//   let sortedNums = nums.sort((a, b) => {
//     if (a < b) {
//       return 1;
//     }
//     if (a > b) {
//       return -1;
//     }
//     return 0;
//   });
//   for (let i = 0; i <= nums.length; i++) {
//     if (sortedNums[i] === sortedNums[i + 1]) {
//       return sortedNums[i] + (sortedNums[i] + 1);
//     }
//   }
// }

// find_mistake([4, 3, 3, 1]);

// str = "fox";
// const almost_palindrome = function (str) {
//   count = 0;
//   let forwardStrArr = str.split("");
//   let reverseStrArr = [];

//   forwardStrArr.map((letter) => {
//     reverseStrArr.unshift(letter);
//   });

//   for (let i = 0; i <= forwardStrArr.length - 1; i++) {
//     if (forwardStrArr[i] !== reverseStrArr[i]) {
//       count += 1;
//     }
//   }

//   console.log(count);
// };

// console.log(almost_palindrome(str));

Math.max(...numbers);

console.log(findLargest);
