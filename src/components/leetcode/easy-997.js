// /**
//  * 两个 index 索引
//  *  i 依次比对 i ～ j 之间的数字
//  *  j 按顺序从左往右
//  *
//  * 思路：
//  *  首选需要维护一个正确的数组结构 [1,2];
//  *  然后接下来每次便利时，都在[1,2] 中某个数字之前插入一个数字，慢慢扩展 最开始维持的结构 [1,2]
//  * @param nums [1, 2, 3, 4]
//  */
// function sortedSquares(nums) {
//   if (nums[0] < 0) {
//     for (let i = 0, j = 0; j <= nums.length - 1; j++) {
//       nums[j] = Math.abs(nums[j]);
//       for (; i < j; i++) {
//         if (nums[i] > nums[j]) {
//           // [5, 3, 2] -> [3, 5, 2]
//           // [2, 3, 5]
//           nums.splice(i, 0, nums[j]);
//           nums.splice(j + 1, 1);
//           break;
//         }
//       }
//       i = 0;
//     }
//   }
//   return nums.map((num) => num * num);
// }

// 因为这道题是标准模型
// 非递减的数组只有三种情况
// ------->
// <------>
// <------
// 可以如果从数组的两端开始找，那么比较之后一定有一个数是当前位置的最大值。

function sortedSquares(nums) {
  let newArr = [];
  let i = 0,
    j = nums.length - 1;
  for (; i <= j; ) {
    let left = Math.abs(nums[i]);
    let right = Math.abs(nums[j]);
    if (left > right) {
      newArr[j - i] = left * left;
      i++;
    } else {
      newArr[j - i] = right * right;
      j--;
    }
  }
  return newArr;
}

let arr = [-4, -1, 0, 3, 10];

// [-4,-1,0,3,10]
// [-5,-3,-2,-1]
console.log("data: ", sortedSquares(arr));
