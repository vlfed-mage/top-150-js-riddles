import { describe, it, expect } from 'vitest';
import removeDuplicatesII from './remove-duplicates-from-sorted-array-ii';

// in-place mutation - assert return value + modified array
describe('removeDuplicatesII', () => {
  it('should allow at most two duplicates', () => {
    const nums: number[] = [1, 1, 1, 2, 2, 3];
    const k: number = removeDuplicatesII(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3]);
  });

  it('should handle multiple groups with duplicates', () => {
    const nums: number[] = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    const k: number = removeDuplicatesII(nums);
    expect(k).toBe(7);
    expect(nums.slice(0, k)).toEqual([0, 0, 1, 1, 2, 3, 3]);
  });

  it('should handle single element', () => {
    const nums: number[] = [1];
    const k: number = removeDuplicatesII(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([1]);
  });

  it('should handle two elements', () => {
    const nums: number[] = [1, 1];
    const k: number = removeDuplicatesII(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([1, 1]);
  });

  it('should handle already valid array', () => {
    const nums: number[] = [1, 1, 2, 2, 3, 3];
    const k: number = removeDuplicatesII(nums);
    expect(k).toBe(6);
    expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3, 3]);
  });

  it('should handle all same elements', () => {
    const nums: number[] = [5, 5, 5, 5, 5];
    const k: number = removeDuplicatesII(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([5, 5]);
  });

  it('should handle no duplicates', () => {
    const nums: number[] = [1, 2, 3, 4];
    const k: number = removeDuplicatesII(nums);
    expect(k).toBe(4);
    expect(nums.slice(0, k)).toEqual([1, 2, 3, 4]);
  });
});
