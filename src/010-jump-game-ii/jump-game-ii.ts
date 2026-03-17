// Greedy (BFS-like level expansion)
// Treats the array as BFS levels — each "level" is one jump.
// currentEnd marks the boundary of the current level.
// When i reaches currentEnd, all positions in this level are explored,
// so we expand to the next level (currentEnd = maxReach) and increment jumps.
// Example: [2,3,1,1,4]
//   Level 0: [2]    → reach indices 1,2 → currentEnd=2
//   Level 1: [3,1]  → reach index 4    → currentEnd=4 → done in 2 jumps
const jump = (nums: number[]): number => {
  let jumps: number = 0;
  let maxReach: number = 0;
  let currentEnd: number = 0;

  for (let i: number = 0; i < nums.length - 1; i++) {
    maxReach = Math.max(maxReach, i + nums[i]);

    if (i === currentEnd) {
      currentEnd = maxReach;
      jumps++;
    }
  }

  return jumps;
};

export default jump;
