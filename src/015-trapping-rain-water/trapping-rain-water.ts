// Two Pointers (squeeze from both ends)
//
// Water at position i = min(maxLeft, maxRight) - height[i]
// We don't need to know both maxes at once - the smaller side
// determines the water level, so we always process the smaller side.
//
// Example: height = [3, 0, 3]
//
//   l=0, r=2, maxL=0, maxR=0
//   height[0](3) <= height[2](3): maxL=3, water += 3-3=0, l=1
//   height[1](0) <= height[2](3): maxL=3, water += 3-0=3, l=2
//   l === r → stop. Total: 3
const trap = (height: number[]): number => {
  let l: number = 0;
  let r: number = height.length - 1;
  let maxL: number = 0;
  let maxR: number = 0;
  let water: number = 0;

  while (l < r) {
    if (height[l] <= height[r]) {
      maxL = Math.max(maxL, height[l]);
      water += maxL - height[l];
      l++;
    } else {
      maxR = Math.max(maxR, height[r]);
      water += maxR - height[r];
      r--;
    }
  }

  return water;
};

export default trap;
