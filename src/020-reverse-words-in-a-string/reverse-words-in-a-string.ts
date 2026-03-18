// Two Pointers (manual swap)
// Split into words, swap from both ends inward, join back.
// Same algorithm as Array.reverse() but explicit.
const reverseWordsManual = (s: string): string => {
  const words: string[] = s.trim().split(' ').filter((word) => word.length);

  let left: number = 0;
  let right: number = words.length - 1;

  while (left < right) {
    [words[left], words[right]] = [words[right], words[left]];
    left++;
    right--;
  }

  return words.join(' ');
};

// Built-in reverse (same algorithm, native C++ implementation in V8)
const reverseWords = (s: string): string => {
  return s.trim().split(/\s+/).reverse().join(' ');
};

export default reverseWords;
export { reverseWordsManual };
