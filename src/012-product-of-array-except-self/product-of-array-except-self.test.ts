import { describe, it, expect } from 'vitest';
import productExceptSelf from './product-of-array-except-self';

// pure return value — assert the result directly
describe('productExceptSelf', () => {
  it('should return [24,12,8,6] for [1,2,3,4]', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  it('should handle zeros', () => {
    const result: number[] = productExceptSelf([-1, 1, 0, -3, 3]);
    expect(result.map(Math.abs)).toEqual([0, 0, 9, 0, 0]);
  });

  it('should handle two elements', () => {
    expect(productExceptSelf([3, 5])).toEqual([5, 3]);
  });

  it('should handle all ones', () => {
    expect(productExceptSelf([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
  });

  it('should handle negative numbers', () => {
    expect(productExceptSelf([-1, -2, -3])).toEqual([6, 3, 2]);
  });

  it('should handle multiple zeros', () => {
    expect(productExceptSelf([0, 0, 3])).toEqual([0, 0, 0]);
  });

  it('should handle single zero', () => {
    expect(productExceptSelf([1, 0, 3])).toEqual([0, 3, 0]);
  });
});