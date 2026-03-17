// Greedy (track max reachable index)
const canJump = (nums: number[]): boolean => {
  let maxJump: number = 0;

  for (let i: number = 0; i < nums.length; i++) {
    if (maxJump >= nums.length - 1) return true;
    if (i > maxJump) return false;
    maxJump = Math.max(maxJump, i + nums[i]);
  }

  return true;
};

export default canJump;
