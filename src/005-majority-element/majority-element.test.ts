import { describe, it, expect } from 'vitest';
import majorityElement from './majority-element';

// pure return value - assert the result directly
describe('majorityElement', () => {
  it('should return 3 for [3,2,3]', () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
  });

  it('should return 2 for [2,2,1,1,1,2,2]', () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

  it('should handle single element', () => {
    expect(majorityElement([1])).toBe(1);
  });

  it('should handle all same elements', () => {
    expect(majorityElement([5, 5, 5, 5])).toBe(5);
  });

  it('should handle majority at the end', () => {
    expect(majorityElement([1, 2, 3, 3, 3])).toBe(3);
  });

  it('should handle negative numbers', () => {
    expect(majorityElement([-1, -1, 2])).toBe(-1);
  });
});
