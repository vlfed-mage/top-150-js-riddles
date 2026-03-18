// Vertical Scan (compare column by column)
// Use first string as reference. For each character position,
// check if all other strings have the same character.
// Stop at first mismatch or when any string runs out of characters.
// Track index instead of building string - slice once at the end.
const longestCommonPrefix = (strs: string[]): string => {
  for (let i: number = 0; i < strs[0].length; i++) {

    for (let j: number = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
};

export default longestCommonPrefix;
