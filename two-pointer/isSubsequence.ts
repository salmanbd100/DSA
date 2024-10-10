var isSubsequence = function (s: string, t: string): boolean {
  if (s.length > t.length) return false;
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[count] === t[i]) {
      count++;
    }
  }
  return count === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
