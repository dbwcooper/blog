function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  let result = -1;
  for (; left <= right; ) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    }
    if (nums[mid] === target) {
      result = mid;
      break;
    }
  }

  return result;
}

let nums = [-1, 0, 3, 5, 9, 12];

const data = search(nums, 9);
console.log(data);
