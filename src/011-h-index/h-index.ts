// Counting Sort (bucket array)
// O(n) time, O(n) space
//
// Example: citations = [3, 0, 6, 1, 5], n = 5
//
// Step 1: Fill buckets (index = citation count, capped at n)
//   buckets[h] counts how many papers have exactly h citations
//   index n (last) is special - it catches all citations >= n
//
//   citations[0] = 3 → buckets[3]++  → [0, 0, 0, 1, 0, 0]
//   citations[1] = 0 → buckets[0]++  → [1, 0, 0, 1, 0, 0]
//   citations[2] = 6 → min(6,5) = 5  → [1, 0, 0, 1, 0, 1]
//   citations[3] = 1 → buckets[1]++  → [1, 1, 0, 1, 0, 1]
//   citations[4] = 5 → min(5,5) = 5  → [1, 1, 0, 1, 0, 2]
//
// Step 2: Scan right-to-left, accumulating counts
//   accumulated at position h = how many papers have h+ citations
//
//   h=5: accumulated = 0 + 2 = 2  → 2 >= 5? no
//   h=4: accumulated = 2 + 0 = 2  → 2 >= 4? no
//   h=3: accumulated = 2 + 1 = 3  → 3 >= 3? YES → return 3
//   (3 papers have 3+ citations)
const hIndex = (citations: number[]): number => {
  const n: number = citations.length;
  const buckets: number[] = new Array(n + 1).fill(0);

  for (let i: number = 0; i < n; i++) {
    buckets[Math.min(citations[i], n)]++;
  }

  let acc: number = 0;

  for (let h: number = n; h >= 0; h--) {
    acc += buckets[h];

    if (acc >= h) {
      return h;
    }
  }

  return 0;
};

export default hIndex;
