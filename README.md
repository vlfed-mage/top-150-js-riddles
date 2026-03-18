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
| 011 | [H-Index](#011-h-index) | Medium | Counting Sort / Sorting + Scan | [Code](src/011-h-index/h-index.ts) |
| 012 | [Product of Array Except Self](#012-product-of-array-except-self) | Medium | Prefix & Suffix Products | [Code](src/012-product-of-array-except-self/product-of-array-except-self.ts) |

---

### 001. Merge Sorted Array

Merge two sorted arrays `nums1` and `nums2` into `nums1` in-place in non-decreasing order.

**Algorithm: Three Pointers (from end).** Start three pointers at the ends of both input regions and the end of `nums1`. Compare elements from both arrays and place the larger one at the write pointer, moving backwards. Since we fill from the end, we never overwrite unprocessed elements in `nums1`.

<details>
<summary>Solution</summary>

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

</details>

**Time complexity:** O(m + n) - single pass from the end.
**Space complexity:** O(1) - in-place merge with no extra allocation.

---

### 002. Remove Element

Remove all occurrences of `val` in `nums` in-place and return the count of remaining elements.

**Algorithm: Two Pointers (read/write).** A read pointer `i` scans every element, while a write pointer `k` tracks where the next kept element goes. When `nums[i] !== val`, copy it to `nums[k]` and advance `k`. Elements before `k` are the result; everything after is garbage.

<details>
<summary>Solution</summary>

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

</details>

**Time complexity:** O(n) - single pass through the array.
**Space complexity:** O(1) - in-place with a write pointer.

---

### 003. Remove Duplicates from Sorted Array

Remove duplicates in-place from a sorted array so each element appears only once. Return the count of unique elements.

**Algorithm: Two Pointers (read/write).** Since the array is sorted, duplicates are adjacent. The write pointer `k` starts at 1 (first element is always unique). The read pointer `i` scans from index 1 - whenever `nums[i]` differs from the last written element `nums[k-1]`, it's a new unique value, so we write it at `k` and advance.

<details>
<summary>Solution</summary>

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

</details>

**Time complexity:** O(n) - single pass through the array.
**Space complexity:** O(1) - in-place with a write pointer.

---

### 004. Remove Duplicates from Sorted Array II

Remove duplicates in-place from a sorted array so each element appears at most twice. Return the count of remaining elements.

**Algorithm: Two Pointers (read/write).** Same pattern as problem 003, but the write pointer starts at 2 (first two elements are always valid). We compare `nums[i]` against `nums[k-2]` - if they differ, the element hasn't appeared twice yet in the result, so we write it. This generalizes: to allow at most `N` duplicates, start `k` at `N` and compare against `nums[k-N]`.

<details>
<summary>Solution</summary>

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

</details>

**Time complexity:** O(n) - single pass through the array.
**Space complexity:** O(1) - in-place with a write pointer.

---

### 005. Majority Element

Return the element that appears more than `⌊n / 2⌋` times.

**Algorithm: Boyer-Moore Voting.** Maintain a candidate `el` and a counter `k`. When the next element matches the candidate, increment `k`; when it differs, decrement `k`. When `k` hits 0, pick the current element as the new candidate. The majority element survives because it appears more than all others combined - every "cancellation" removes one majority and one minority, so the majority always has leftover votes.

<details>
<summary>Solution</summary>

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

</details>

**Time complexity:** O(n) - single pass through the array.
**Space complexity:** O(1) - no extra data structures.

---

### 006. Rotate Array

Rotate the array to the right by `k` steps in-place.

**Algorithm: Reverse Three Times.** A right rotation by `k` moves the last `k` elements to the front. Instead of shifting elements one by one, reverse the entire array (puts the last `k` elements first, but in wrong order), then reverse the first `k` elements (fixes their order), then reverse the remaining elements (fixes their order). Three O(n) reversals = O(n) total.

<details>
<summary>Solution</summary>

```typescript
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

</details>

**Time complexity:** O(n) - each element is reversed twice.
**Space complexity:** O(1) - in-place swaps only.

---

### 007. Best Time to Buy and Sell Stock

Find the maximum profit from a single buy-sell transaction.

**Algorithm: Greedy (track min price).** Scan left to right, maintaining the lowest price seen so far. At each position, the best profit from selling today is `prices[i] - min`. Update the global max profit accordingly. By always tracking the minimum, we guarantee we're considering the best possible buy point for any future sell.

<details>
<summary>Solution</summary>

```typescript
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

</details>

**Time complexity:** O(n) - single pass through the array.
**Space complexity:** O(1) - two variables only.

---

### 008. Best Time to Buy and Sell Stock II

Maximize profit with unlimited transactions (buy and sell multiple times).

**Algorithm: Greedy (collect every uphill).** Every consecutive price increase represents a profitable transaction. Instead of finding optimal buy/sell pairs, simply add up every positive difference `prices[i] - prices[i-1]`. This works because any multi-day profit equals the sum of its daily gains - buying at 1 and selling at 5 is the same as buying/selling at 1→2, 2→3, 3→4, 4→5.

<details>
<summary>Solution</summary>

```typescript
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

</details>

**Time complexity:** O(n) - single pass through the array.
**Space complexity:** O(1) - one variable only.

---

### 009. Jump Game

Determine if you can reach the last index.

**Algorithm: Greedy (max reachable index).** Track the farthest index reachable so far (`maxJump`). At each position `i`, update `maxJump = max(maxJump, i + nums[i])`. If `i` ever exceeds `maxJump`, we're stuck at a position we can't reach - return false. If `maxJump` reaches or passes the last index, return true.

<details>
<summary>Solution</summary>

```typescript
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

</details>

**Time complexity:** O(n) - single pass through the array.
**Space complexity:** O(1) - one variable only.

---

### 010. Jump Game II

Find the minimum number of jumps to reach the last index.

**Algorithm: Greedy (BFS-like level expansion).** Treats the array as BFS levels where each level is one jump. `currentEnd` marks the boundary of the current level, `maxReach` tracks the farthest index reachable from this level. When `i` reaches `currentEnd`, all positions in the current level have been explored - expand to the next level by setting `currentEnd = maxReach` and incrementing `jumps`. Example: `[2,3,1,1,4]` - Level 0: `[2]` reaches indices 1,2; Level 1: `[3,1]` reaches index 4 - done in 2 jumps.

<details>
<summary>Solution</summary>

```typescript
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

</details>

**Time complexity:** O(n) - single pass through the array.
**Space complexity:** O(1) - three variables only.

---

### 011. H-Index

Find the largest `h` such that at least `h` papers have `h` or more citations. Two approaches:

#### Variant 1: Counting Sort (O(n) time, O(n) space)

**Algorithm: Counting Sort (bucket array).** Since h can only be `0..n`, create a bucket array of size `n+1`. For each citation, increment `buckets[min(citation, n)]` — values above `n` are capped because h can never exceed the total number of papers. Then scan from `h = n` down to `0`, accumulating bucket counts. The first `h` where `accumulated >= h` means at least `h` papers have `h+` citations — that's the answer.

<details>
<summary>Solution</summary>

```typescript
const hIndex = (citations: number[]): number => {
  const n: number = citations.length;
  const buckets: number[] = new Array(n + 1).fill(0);

  for (let i: number = 0; i < n; i++) {
    buckets[Math.min(citations[i], n)]++;
  }

  let accumulated: number = 0;

  for (let h: number = n; h >= 0; h--) {
    accumulated += buckets[h];

    if (accumulated >= h) {
      return h;
    }
  }

  return 0;
};
```

</details>

**Time complexity:** O(n) - two passes (fill buckets + scan).
**Space complexity:** O(n) - bucket array of size n+1.

#### Variant 2: Sorting + Linear Scan (O(n log n) time, O(1) space)

**Algorithm: Sort descending + scan.** After sorting in descending order, `citations[i]` is the (i+1)-th highest citation count. Walk through the sorted array: as long as `citations[i] >= i + 1`, it means `i + 1` papers have at least `i + 1` citations. The largest such `i + 1` is the h-index. Stop at the first violation since all subsequent values will be smaller.

<details>
<summary>Solution</summary>

```typescript
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
```

</details>

**Time complexity:** O(n log n) - dominated by sorting.
**Space complexity:** O(1) - no extra allocation (in-place sort).

---

### 012. Product of Array Except Self

Return an array where each element is the product of all other elements, without using division.

**Algorithm: Prefix & Suffix Products (two passes).** First pass left-to-right: build `answer[i]` = product of all elements to the left of `i`. Second pass right-to-left: multiply each `answer[i]` by the running suffix product (product of all elements to the right of `i`). After both passes, `answer[i] = leftProduct * rightProduct` = product of everything except `nums[i]`. Uses O(1) extra space since the output array stores prefix products and the suffix is a single variable.

<details>
<summary>Solution</summary>

```typescript
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
```

</details>

**Time complexity:** O(n) - two passes through the array.
**Space complexity:** O(1) extra - output array stores prefix, suffix is one variable.
