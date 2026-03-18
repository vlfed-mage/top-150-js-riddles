// Two Passes (left-to-right + right-to-left)
//
// Example: ratings = [1, 3, 5, 4, 2]
//
// Start: everyone gets 1 candy        → [1, 1, 1, 1, 1]
//
// Pass 1 (left-to-right): if rating > left neighbor, give left + 1
//   i=1: 3 > 1 → candies[1] = 1+1=2  → [1, 2, 1, 1, 1]
//   i=2: 5 > 3 → candies[2] = 2+1=3  → [1, 2, 3, 1, 1]
//   i=3: 4 < 5 → skip                 → [1, 2, 3, 1, 1]
//   i=4: 2 < 4 → skip                 → [1, 2, 3, 1, 1]
//
// Pass 2 (right-to-left): if rating > right neighbor, take max(current, right + 1)
//   i=3: 4 > 2 → max(1, 1+1)=2       → [1, 2, 3, 2, 1]
//   i=2: 5 > 4 → max(3, 2+1)=3       → [1, 2, 3, 2, 1]
//   i=1: 3 < 5 → skip                 → [1, 2, 3, 2, 1]
//   i=0: 1 < 3 → skip                 → [1, 2, 3, 2, 1]
//
// Sum: 1+2+3+2+1 = 9
const candy = (ratings: number[]): number => {
  const n: number = ratings.length;
  const candies: number[] = new Array(n).fill(1);

  for (let i: number = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i: number = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  return candies.reduce((sum, c) => sum + c, 0);
};

export default candy;