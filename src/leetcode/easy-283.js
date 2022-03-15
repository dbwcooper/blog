/**
 Do not return anything, modify nums in-place instead.

 [0,1,0,3,12]
 */
function moveZeroes(nums) {
  // i 用来遍历
  // j 用来记录 结果数组中 0 之前 的位置
  for (let i = 0, j = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i];
    }
  }

  while (j < nums.length) {
    nums[j++] = 0;
  }
}
