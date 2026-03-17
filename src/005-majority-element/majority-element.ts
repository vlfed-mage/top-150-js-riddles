// Boyer-Moore Voting Algorithm
const majorityElement = (nums: number[]): number => {
  let el: number = nums[0];
  let k: number = 1;

  for (let i: number = 1; i < nums.length; i++) {
    if (el === nums[i]) {
      k++;
    } else if (k === 0) {
      el = nums[i];
      k = 1;
    } else {
      k--;
    }
  }

  return el;
};

export default majorityElement;