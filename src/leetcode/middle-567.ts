export default function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  let left = 0;
  let right = 0;

  let need = new Map<string, number>();
  let window = new Map<string, number>();

  for (let i = 0; i < s1.length; i++)
    need.set(s1[i], (need.get(s1[i]) || 0) + 1);

  let validCount = 0;
  while (right < s2.length) {
    let c = s2[right];
    right++;

    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) {
        validCount++;
      }
    }

    // 开始计算 left ～ right 之间的字符串
    while (right - left >= s1.length) {
      if (validCount === need.size) {
        return true; // 已经找到了
      }
      let d = s2[left];
      left++;

      if (window.has(d)) {
        // #1 validCount 自减
        if (window.get(d) === need.get(d)) {
          validCount--;
        }

        // #2 window[d] 自减
        if (window.get(d)! > 0) {
          window.set(d, window.get(d)! - 1);
        }
      }
    }
  }

  return false;
}

console.log(checkInclusion("ab", "eidbaooo"));
