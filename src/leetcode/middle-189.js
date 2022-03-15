/**
 Do not return anything, modify nums in-place instead.
 */
// 解法1： 时间复杂度O(n)，空间复杂度O(n)
function rotate(nums, k) {
  if (nums.length <= 1 || k === 0 || k === nums.length) {
    return;
  }
  const arr = [...nums];
  for (let i = 0; i < r.length; i++) {
    nums[(k + i) % n] = arr[i];
  }
}

// 解法2： 时间复杂度O(n)，空间复杂度O(1)
function rotate2(nums, k) {
  k = k % nums.length;

  function reverse(i, j) {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j--;
      i++;
    }
  }

  /**
    nums = "----->-->"; k =3
    result = "-->----->";
    https://leetcode-cn.com/problems/rotate-array/solution/xuan-zhuan-shu-zu-by-leetcode-solution-nipk/736761
    reverse "----->-->" we can get "<--<-----"
    reverse "<--" we can get "--><-----"
    reverse "<-----" we can get "-->----->"
   */
  // 第一步反转整个数组；
  reverse(0, nums.length - 1);
  //
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
}

// nums = [-1,-100,3,99], k = 2
let nums = [-1, -100, 3, 99, 2];
rotate2(nums, 2);
// rotate(nums, 2);

console.log("nums: ", nums);
