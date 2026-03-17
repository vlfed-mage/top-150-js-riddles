import { describe, it, expect } from 'vitest';
import removeDuplicates from './remove-duplicates-from-sorted-array';

describe('removeDuplicates', () => {
  it('should remove duplicates from [1,1,2]', () => {
    const nums: number[] = [1, 1, 2];
    const k: number = removeDuplicates(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([1, 2]);
  });

  it('should remove duplicates from longer array', () => {
    const nums: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const k: number = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
  });

  it('should handle single element', () => {
    const nums: number[] = [1];
    const k: number = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([1]);
  });

  it('should handle all same elements', () => {
    const nums: number[] = [5, 5, 5, 5];
    const k: number = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([5]);
  });

  it('should handle already unique array', () => {
    const nums: number[] = [1, 2, 3, 4, 5];
    const k: number = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle negative numbers', () => {
    const nums: number[] = [-3, -3, -1, 0, 0, 2];
    const k: number = removeDuplicates(nums);
    expect(k).toBe(4);
    expect(nums.slice(0, k)).toEqual([-3, -1, 0, 2]);
  });
});
