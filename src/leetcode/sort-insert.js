let arr = [1, 3, 4, 5, 7, 2, 3, 4, 4];

// 插入排序
function insertSort(array) {
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    let postion = i;

    while (postion > 0 && array[postion - 1] > value) {
      // 第一次循环后： value = 2
      // array: [1,3,4,5,7,7,4,4]
      array[postion] = array[postion - 1];
      postion--;
    }
    array[postion] = value;
  }
  return array;
}

console.log(insertSort(arr));
