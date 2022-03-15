/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let results = "";
  function reverse(start, end) {
    let temp = "";
    if (s.charAt(start - 1) === " ") {
      temp = " ";
    }
    while (start <= end) {
      temp += s.charAt(end);
      end--;
    }
    results += temp;
  }

  for (let i = 0, j = 0; j < s.length; j++) {
    if (s.charAt(j) === " ") {
      reverse(i, j - 1);
      i = j + 1;
    }
    if (j === s.length - 1) {
      reverse(i, j);
    }
  }

  return results;
};

console.log(reverseWords("Let's take LeetCode contest"));
