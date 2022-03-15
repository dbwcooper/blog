/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let i = 0,
    j = numbers.length - 1; // 避免【-1,xxxxx, 1,1】 2
  while (numbers[i] + numbers[j] !== target) {
    let diff = target - numbers[i];

    if (numbers[j] === diff) break;

    // 增加临界判断
    if (numbers[j] > diff) {
      j--;
    } else {
      i++;
    }
  }
  return [i + 1, j + 1];
};

const nums = [2, 3, 4];

console.log(twoSum(nums, 6));
