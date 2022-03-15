let arr = [1, 3, 4, 5, 7, 2, 3, 4, 4];

// 选择排序
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swapIndex = i;

    // 循环查找最小的值
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[i]) {
        swapIndex = j;
      }
    }

    if (i !== swapIndex) {
      let temp = array[i];
      array[i] = array[swapIndex];
      array[swapIndex] = temp;
    }
  }
  return array;
}

console.log(selectionSort(arr));
