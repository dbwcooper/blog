
function flat1(array, d = 1) {
  return array.reduce((arr, cur) => {
    if (Array.isArray(cur)) {
      arr = arr.concat(cur);
    } else {
      arr.push(cur);
    }
    return arr;
  }, []);
}

function flatDeep(array, d = 1) {
  if (d > 0) {
    return array.reduce((arr, cur) => {
      if (Array.isArray(cur)) {
        arr = arr.concat(flatDeep(cur, d - 1));
      } else {
        arr.push(cur);
      }
      return arr;
    }, []);
  }

  return array;
}
