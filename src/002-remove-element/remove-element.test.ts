import { describe, it, expect } from 'vitest';
import removeElement from './remove-element';

// in-place mutation — assert return value + modified array
describe('removeElement', () => {
  it('should remove all occurrences of val', () => {
    const nums: number[] = [3, 2, 2, 3];
    const k: number = removeElement(nums, 3);
    expect(k).toBe(2);
    expect(nums.slice(0, k).sort()).toEqual([2, 2]);
  });

  it('should handle multiple occurrences', () => {
    const nums: number[] = [0, 1, 2, 2, 3, 0, 4, 2];
    const k: number = removeElement(nums, 2);
    expect(k).toBe(5);
    expect(nums.slice(0, k).sort()).toEqual([0, 0, 1, 3, 4]);
  });

  it('should handle empty array', () => {
    const nums: number[] = [];
    const k: number = removeElement(nums, 1);
    expect(k).toBe(0);
  });

  it('should handle array with all same values', () => {
    const nums: number[] = [1, 1, 1];
    const k: number = removeElement(nums, 1);
    expect(k).toBe(0);
  });

  it('should handle array with no matching values', () => {
    const nums: number[] = [1, 2, 3];
    const k: number = removeElement(nums, 4);
    expect(k).toBe(3);
    expect(nums.slice(0, k).sort()).toEqual([1, 2, 3]);
  });

  it('should handle single element matching', () => {
    const nums: number[] = [5];
    const k: number = removeElement(nums, 5);
    expect(k).toBe(0);
  });

  it('should handle single element not matching', () => {
    const nums: number[] = [5];
    const k: number = removeElement(nums, 3);
    expect(k).toBe(1);
    expect(nums[0]).toBe(5);
  });
});
