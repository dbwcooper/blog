let arr = [1, 3, 4, 5, 7, 2, 3, 4, 4];

// 冒泡排序
function bubbleSort(array) {
  // j --- i 之间如果未交互顺序，则表示剩下的元素的顺序已经ok了。
  // 不再需要循环了。
  let swap = false;
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
        swap = true;
      }
    }
    if (swap === false) {
      break;
    }
  }
  return array;
}

console.log(bubbleSort(arr));
