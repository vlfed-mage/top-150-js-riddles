# Top 150 LeetCode Riddles in TypeScript

A collection of the top 150 LeetCode problems solved in TypeScript with tests.

## How to run

```bash
npm test          # run all tests
npm run test:watch # run tests in watch mode
```

## Riddles

| #   | Problem                                                                         | Difficulty | Solution                                                                                   |
| --- | ------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------ |
| 001 | [Merge Sorted Array](#001-merge-sorted-array)                                   | Easy       | [Code](src/001-merge-sorted-array/merge-sorted-array.ts)                                   |
| 002 | [Remove Element](#002-remove-element)                                           | Easy       | [Code](src/002-remove-element/remove-element.ts)                                           |
| 003 | [Remove Duplicates from Sorted Array](#003-remove-duplicates-from-sorted-array) | Easy       | [Code](src/003-remove-duplicates-from-sorted-array/remove-duplicates-from-sorted-array.ts) |
| 004 | [Remove Duplicates from Sorted Array II](#004-remove-duplicates-from-sorted-array-ii) | Medium | [Code](src/004-remove-duplicates-from-sorted-array-ii/remove-duplicates-from-sorted-array-ii.ts) |

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
