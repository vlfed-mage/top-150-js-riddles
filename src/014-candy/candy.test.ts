import { describe, it, expect } from 'vitest';
import candy from './candy';

// pure return value - assert the result directly
describe('candy', () => {
  it('should return 5 for [1,0,2]', () => {
    expect(candy([1, 0, 2])).toBe(5);
  });

  it('should handle equal adjacent ratings', () => {
    expect(candy([1, 2, 2])).toBe(4);
  });

  it('should handle single child', () => {
    expect(candy([5])).toBe(1);
  });

  it('should handle strictly decreasing', () => {
    expect(candy([5, 4, 3, 2, 1])).toBe(15);
  });

  it('should handle strictly increasing', () => {
    expect(candy([1, 2, 3, 4, 5])).toBe(15);
  });

  it('should handle peak in the middle', () => {
    expect(candy([1, 3, 5, 4, 2])).toBe(9);
  });

  it('should handle all equal ratings', () => {
    expect(candy([3, 3, 3, 3])).toBe(4);
  });

  it('should handle valley', () => {
    expect(candy([5, 3, 1, 3, 5])).toBe(11);
  });
});
