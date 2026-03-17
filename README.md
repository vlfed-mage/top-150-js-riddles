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
