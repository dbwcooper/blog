function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// // 快速排序
// function partition(array, left = 0, right) {
//   // 左指针
//   left = typeof left === 'number' ? left : 0;
//   // 右指针
//   right = typeof right === 'number' ? right : array.length - 1;

//   // 基准值
//   let partition = array[left];
//   let partitionIndex = left;
//   while (left < right) {
//     // 需要处理的情况
//     if (array[right] < partition) {
//       swap(array, left, right);
//       partitionIndex = right;
//     }
//     if (array[left] > partition) {
//       swap(array, left, right);
//       partitionIndex = left;
//     }

//     // 判断 left 指针向右移动
//     // 还是 right 指针向左移动
//     if (partitionIndex === right) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return left;
// }

// function quickSort(array, left = 0, right) {
//   if (left >= right) return;
//   // 左指针
//   left = typeof left === 'number' ? left : 0;
//   // 右指针
//   right = typeof right === 'number' ? right : array.length - 1;

//   let partitionIndex = partition(array, left, right);
//   quickSort(array, left, partitionIndex - 1);
//   quickSort(array, partitionIndex + 1, right);

//   return array;
// }

// console.log(quickSort(arr));

// 循环一次数组，并返回基准值的 index
function partition(arr, left, right) {
  let value = arr[left];
  // 默认是 right 指针向左边移动
  let cursor = right;
  while (left < right) {
    if (arr[right] < value) {
      swap(arr, left, right);
      cursor = left;
    }

    if (arr[left] > value) {
      swap(arr, left, right);
      cursor = right;
    }

    // 判断：right 指针向左移动
    // 还是：left 指针向右移动
    if (cursor <= left) {
      left++;
    } else {
      right--;
    }
  }
  return left;
}

function quickSort(arr, left, right) {
  if (left >= right) return;
  left = typeof left === 'number' ? left : 0;
  right = typeof right === 'number' ? right : arr.length - 1;

  let partitionIndex = partition(arr, left, right);
  quickSort(arr, left, partitionIndex - 1);
  quickSort(arr, partitionIndex + 1, right);

  return arr;
}

let arr = [
  3, 1, 4, 5, 7, 2, 3, 4, 4, 1, 2, 3, 4, 5, 2, 2, 2, 2, 10, 11, 24, 3, 21, 1,
];
// 2 "1" 4 5 7 '3' 3 4 4  : left + 1
// 2 1 "3" 5 7 '4' 3 4 4

let asrr = [7, 1, 3, 4, 6, 3, 7];
console.log(quickSort(arr));
console.log(quickSort(asrr));
