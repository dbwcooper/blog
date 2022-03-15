/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0,
    right = 0;
  let res = "";
  let window = {};

  function max(res, slice) {
    return res.length > slice.length ? res : slice;
  }

  for (; right < s.length; ) {
    let c = s[right];
    right++;
    if (!window[c]) window[c] = 0;
    window[c]++;

    while (window[c] > 1) {
      let d = s[left];
      window[d]--;
      left++;
    }
    res = max(res, s.substring(left, right));
  }

  return res.length;
};

let str = "abcabcbb";

console.log(lengthOfLongestSubstring(str));
