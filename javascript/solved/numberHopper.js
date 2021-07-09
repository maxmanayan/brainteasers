let nums = [0];
const can_reach_end = function (nums) {
  let reachesEnd = false;
  for (let i = 0; i <= nums.length - 1; i++) {
    let curNum = nums[i];
    // let curNumIndex = i;
    let indexesRemaining = nums.length - 1 - i;
    if (curNum >= indexesRemaining) {
      reachesEnd = true;
    }
    if (curNum > 1) {
      i += curNum - 1;
    } else if (curNum < 1) {
      i += nums.length;
    }
    console.log(curNum, indexesRemaining);
  }
  return reachesEnd;
};

console.log(can_reach_end(nums));
