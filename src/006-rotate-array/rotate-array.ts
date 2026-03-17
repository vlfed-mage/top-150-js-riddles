// Reverse Three Times
const reverse = (nums: number[], left: number, right: number): void => {
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
};

const rotateArray = (nums: number[], k: number): void => {
  const step: number = k % nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, step - 1);
  reverse(nums, step, nums.length - 1);
};

export default rotateArray;
