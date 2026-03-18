// String Split (trim + split)
const lengthOfLastWord = (s: string): number => {
  const words: string[] = s.trim().split(' ');
  return words[words.length - 1].length;
};

export default lengthOfLastWord;