let nums = [3, 2, 4];
let target = 6;

const twoSum = (nums, target) => {
  let sumArray = [];
  for (let i = 0; i < nums.length; i++) {
    let res = target - nums[i];
    let resIndex = nums.indexOf(res);
    if (resIndex !== -1 && resIndex !== i) {
      sumArray = [i, resIndex];
      i += nums.length;
    }
  }
  return sumArray;
};

console.log(twoSum(nums, target));
