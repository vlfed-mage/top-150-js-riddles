// Prefix & Suffix Products (two passes)
// O(n) time, O(1) extra space (output array doesn't count)
//
// Example: nums = [1, 2, 3, 4]
//
// Pass 1 (left-to-right): build prefix products in answer
//   answer = [1, 1, 2, 6]
//   answer[i] = product of all elements to the left of i
//
// Pass 2 (right-to-left): multiply by suffix products
//   suffix starts at 1
//   i=3: answer[3] = 6 * 1 = 6,   suffix = 1 * 4 = 4
//   i=2: answer[2] = 2 * 4 = 8,   suffix = 4 * 3 = 12
//   i=1: answer[1] = 1 * 12 = 12, suffix = 12 * 2 = 24
//   i=0: answer[0] = 1 * 24 = 24, suffix = 24 * 1 = 24
//
// Result: [24, 12, 8, 6]
const productExceptSelf = (nums: number[]): number[] => {
  const n: number = nums.length;
  const answer: number[] = new Array(n);

  answer[0] = 1;

  for (let i: number = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  let suffix: number = 1;

  for (let i: number = n - 1; i >= 0; i--) {
    answer[i] = answer[i] * suffix;
    suffix = suffix * nums[i];
  }

  return answer;
};

export default productExceptSelf;
