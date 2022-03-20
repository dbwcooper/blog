const temp: number[] = [];

function sortArray(nums: number[]): number[] {
  if (nums.length === 0) return [];
  sort(nums, 0, nums.length - 1);
  return nums;
}

function sort(nums: number[], left: number, right: number) {
  if (left >= right) return;
  let mid = Math.floor((left + right) / 2);

  sort(nums, left, mid);
  sort(nums, mid + 1, right);

  merge(nums, left, mid, right);
}

function merge(nums: number[], left: number, mid: number, right: number) {
  // [2,5]
  // [1,3]
  for (let i = left; i <= right; i++) {
    temp[i] = nums[i];
  }

  let p1 = left,
    p2 = mid + 1;
  let i = left;
  while (i <= right) {
    if (p1 > mid) {
      // left ~ mid 的数组合并完成
      nums[i] = temp[p2];
      p2++;
    } else if (p2 > right) {
      // mid + 1 ~ right 的数组合并完成
      nums[i] = temp[p1];
      p1++;
    } else if (temp[p1] > temp[p2]) {
      nums[i] = temp[p2];
      p2++;
    } else {
      nums[i] = temp[p1];
      p1++;
    }
    i++;
  }
}

// let arr = [1, 3, 5, 2, 4, 6, 7];

// console.log(sortArray(arr));
