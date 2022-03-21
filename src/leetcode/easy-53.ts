function maxSubArray(nums: number[]): number {
  if (nums.length === 0) return 0;

  let dp_1 = nums[0],
    res = dp_1;

  for (let i = 1; i < nums.length; i++) {
    dp_1 = Math.max(nums[i], nums[i] + dp_1);
    res = Math.max(res, dp_1);
  }

  return res;
}

// let arr = [1];
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(arr));
