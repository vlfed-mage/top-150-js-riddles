# Top 150 LeetCode Riddles in TypeScript

A collection of the top 150 LeetCode problems solved in TypeScript with tests.

## How to run

```bash
npm test          # run all tests
npm run test:watch # run tests in watch mode
```

## Riddles

| #   | Problem | Difficulty | Algorithm | Solution |
| --- | ------- | ---------- | --------- | -------- |
| 001 | [Merge Sorted Array](#001-merge-sorted-array) | Easy | Three Pointers (from end) | [Code](src/001-merge-sorted-array/merge-sorted-array.ts) |
| 002 | [Remove Element](#002-remove-element) | Easy | Two Pointers (read/write) | [Code](src/002-remove-element/remove-element.ts) |
| 003 | [Remove Duplicates from Sorted Array](#003-remove-duplicates-from-sorted-array) | Easy | Two Pointers (read/write) | [Code](src/003-remove-duplicates-from-sorted-array/remove-duplicates-from-sorted-array.ts) |
| 004 | [Remove Duplicates from Sorted Array II](#004-remove-duplicates-from-sorted-array-ii) | Medium | Two Pointers (read/write) | [Code](src/004-remove-duplicates-from-sorted-array-ii/remove-duplicates-from-sorted-array-ii.ts) |
| 005 | [Majority Element](#005-majority-element) | Easy | Boyer-Moore Voting | [Code](src/005-majority-element/majority-element.ts) |
| 006 | [Rotate Array](#006-rotate-array) | Medium | Reverse Three Times | [Code](src/006-rotate-array/rotate-array.ts) |
| 007 | [Best Time to Buy and Sell Stock](#007-best-time-to-buy-and-sell-stock) | Easy | Greedy (track min price) | [Code](src/007-best-time-to-buy-and-sell-stock/best-time-to-buy-and-sell-stock.ts) |
| 008 | [Best Time to Buy and Sell Stock II](#008-best-time-to-buy-and-sell-stock-ii) | Medium | Greedy (collect every uphill) | [Code](src/008-best-time-to-buy-and-sell-stock-ii/best-time-to-buy-and-sell-stock-ii.ts) |
| 009 | [Jump Game](#009-jump-game) | Medium | Greedy (max reachable index) | [Code](src/009-jump-game/jump-game.ts) |
| 010 | [Jump Game II](#010-jump-game-ii) | Medium | Greedy (BFS-like level expansion) | [Code](src/010-jump-game-ii/jump-game-ii.ts) |

---

### 001. Merge Sorted Array

Merge two sorted arrays `nums1` and `nums2` into `nums1` in-place in non-decreasing order.

```typescript
const mergeSortedArray = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void => {
  let p1: number = m - 1;
  let p2: number = n - 1;
  let wp: number = m + n - 1;

  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[wp] = nums1[p1];
      p1--;
    } else {
      nums1[wp] = nums2[p2];
      p2--;
    }
    wp--;
  }
};
```

**Time complexity:** O(m + n) — single pass from the end.
**Space complexity:** O(1) — in-place merge with no extra allocation.

---

### 002. Remove Element

Remove all occurrences of `val` in `nums` in-place and return the count of remaining elements.

```typescript
const removeElement = (nums: number[], val: number): number => {
  let k: number = 0;

  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
```

**Time complexity:** O(n) — single pass through the array.
**Space complexity:** O(1) — in-place with a write pointer.

---

### 003. Remove Duplicates from Sorted Array

Remove duplicates in-place from a sorted array so each element appears only once. Return the count of unique elements.

```typescript
const removeDuplicates = (nums: number[]): number => {
  let k: number = 1;

  for (let i: number = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
```

**Time complexity:** O(n) — single pass through the array.
**Space complexity:** O(1) — in-place with a write pointer.

---

### 004. Remove Duplicates from Sorted Array II

Remove duplicates in-place from a sorted array so each element appears at most twice. Return the count of remaining elements.

```typescript
const removeDuplicatesII = (nums: number[]): number => {
  if (nums.length <= 2) {
    return nums.length;
  }

  let k: number = 2;

  for (let i: number = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
```

**Time complexity:** O(n) — single pass through the array.
**Space complexity:** O(1) — in-place with a write pointer.

---

### 005. Majority Element

Return the element that appears more than `⌊n / 2⌋` times using Boyer-Moore Voting Algorithm.

```typescript
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
```

**Time complexity:** O(n) — single pass through the array.
**Space complexity:** O(1) — no extra data structures.

---

### 006. Rotate Array

Rotate the array to the right by `k` steps in-place using three reversals.

```typescript
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
```

**Time complexity:** O(n) — each element is reversed twice.
**Space complexity:** O(1) — in-place swaps only.

---

### 007. Best Time to Buy and Sell Stock

Find the maximum profit from a single buy-sell transaction by tracking the minimum price seen so far.

```typescript
// Greedy (track min price)
const maxProfit = (prices: number[]): number => {
  let min: number = prices[0];
  let profit: number = 0;

  for (let i: number = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      profit = Math.max(profit, prices[i] - min);
    }
  }

  return profit;
};
```

**Time complexity:** O(n) — single pass through the array.
**Space complexity:** O(1) — two variables only.

---

### 008. Best Time to Buy and Sell Stock II

Maximize profit with unlimited transactions by collecting every consecutive price increase.

```typescript
// Greedy (collect every uphill)
const maxProfitII = (prices: number[]): number => {
  let profit: number = 0;

  for (let i: number = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
};
```

**Time complexity:** O(n) — single pass through the array.
**Space complexity:** O(1) — one variable only.

---

### 009. Jump Game

Determine if you can reach the last index by tracking the farthest reachable position.

```typescript
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
```

**Time complexity:** O(n) — single pass through the array.
**Space complexity:** O(1) — one variable only.

---

### 010. Jump Game II

Find the minimum number of jumps to reach the last index using BFS-like level expansion.

```typescript
// Greedy (BFS-like level expansion)
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
```

**Time complexity:** O(n) — single pass through the array.
**Space complexity:** O(1) — three variables only.
