// Sorting (descending) + Linear Scan
// O(n log n) time, O(1) space
const hIndexSort = (citations: number[]): number => {
  citations.sort((a, b) => b - a);

  let h: number = 0;

  for (let i: number = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h = i + 1;
    } else {
      break;
    }
  }

  return h;
};

export default hIndexSort;
