let nums = [3, 2, 4, 9];
let target = 6;

// const twoSum = (nums, target) => {
//   let sumArray = [];
//   for (let i = 0; i < nums.length; i++) {
//     let res = target - nums[i];
//     let resIndex = nums.indexOf(res);
//     if (resIndex !== -1 && resIndex !== i) {
//       sumArray = [i, resIndex];
//       i += nums.length;
//     }
//   }
//   return sumArray;
// };

const twoSum = (nums, target) => {
  let remainders = {};
  let sumArr = [];
  for (let i = 0; i < nums.length; i++) {
    let curNum = nums[i];
    let res = target - curNum;
    remainders[res] = 1;
    if (curNum in remainders && curNum !== res) {
      sumArr = [nums.indexOf(target - curNum), nums.indexOf(curNum)];
      i += nums.length;
    }
  }
  return sumArr;
};

console.log(twoSum(nums, target));
