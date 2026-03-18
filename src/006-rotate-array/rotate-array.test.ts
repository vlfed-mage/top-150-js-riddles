import { describe, it, expect } from 'vitest';
import rotateArray from './rotate-array';

// in-place mutation - assert the modified array
describe('rotateArray', () => {
  it('should rotate by 3 steps', () => {
    const nums: number[] = [1, 2, 3, 4, 5, 6, 7];
    rotateArray(nums, 3);
    expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it('should rotate by 2 steps', () => {
    const nums: number[] = [-1, -100, 3, 99];
    rotateArray(nums, 2);
    expect(nums).toEqual([3, 99, -1, -100]);
  });

  it('should handle k equal to length', () => {
    const nums: number[] = [1, 2, 3];
    rotateArray(nums, 3);
    expect(nums).toEqual([1, 2, 3]);
  });

  it('should handle k greater than length', () => {
    const nums: number[] = [1, 2, 3];
    rotateArray(nums, 5);
    expect(nums).toEqual([2, 3, 1]);
  });

  it('should handle k equal to 0', () => {
    const nums: number[] = [1, 2, 3];
    rotateArray(nums, 0);
    expect(nums).toEqual([1, 2, 3]);
  });

  it('should handle single element', () => {
    const nums: number[] = [1];
    rotateArray(nums, 5);
    expect(nums).toEqual([1]);
  });

  it('should handle rotate by 1', () => {
    const nums: number[] = [1, 2];
    rotateArray(nums, 1);
    expect(nums).toEqual([2, 1]);
  });
});
