// 暴力求和

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    console.log("nums[i]", nums[i]);
    for (let j = i + 1; j < nums.length; j++) {
      console.log("nums[j]", nums[j]);
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return [0, 0];
};

var result = twoSum([3, 2, 4], 6);
console.log("result", result);
