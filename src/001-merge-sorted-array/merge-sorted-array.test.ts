import { describe, it, expect } from 'vitest';
import mergeSortedArray from './merge-sorted-array';

// in-place mutation - assert the modified array
describe('mergeSortedArray', () => {
  it('should merge two sorted arrays', () => {
    const nums1: number[] = [1, 2, 3, 0, 0, 0];
    mergeSortedArray(nums1, 3, [2, 5, 6], 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it('should handle empty second array', () => {
    const nums1: number[] = [1];
    mergeSortedArray(nums1, 1, [], 0);
    expect(nums1).toEqual([1]);
  });

  it('should handle empty first array', () => {
    const nums1: number[] = [0];
    mergeSortedArray(nums1, 0, [1], 1);
    expect(nums1).toEqual([1]);
  });

  it('should handle duplicate elements', () => {
    const nums1: number[] = [1, 1, 1, 0, 0, 0];
    mergeSortedArray(nums1, 3, [1, 1, 1], 3);
    expect(nums1).toEqual([1, 1, 1, 1, 1, 1]);
  });

  it('should handle negative numbers', () => {
    const nums1: number[] = [-3, -1, 0, 0, 0];
    mergeSortedArray(nums1, 2, [-2, 1, 3], 3);
    expect(nums1).toEqual([-3, -2, -1, 1, 3]);
  });

  it('should handle single element arrays', () => {
    const nums1: number[] = [2, 0];
    mergeSortedArray(nums1, 1, [1], 1);
    expect(nums1).toEqual([1, 2]);
  });
});
