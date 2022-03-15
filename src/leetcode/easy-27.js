function removeElement(nums, val) {
  let i = 0;

  while (nums.length > i) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
}

let nums = [0, 1, 2, 2, 3, 0, 4, 2];

console.log(removeElement(nums, 2));
console.log(nums);
