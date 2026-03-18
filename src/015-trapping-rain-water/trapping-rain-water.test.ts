import { describe, it, expect } from 'vitest';
import trap from './trapping-rain-water';

// pure return value - assert the result directly
describe('trap', () => {
  it('should return 6 for [0,1,0,2,1,0,1,3,2,1,2,1]', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });

  it('should return 9 for [4,2,0,3,2,5]', () => {
    expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
  });

  it('should return 0 for increasing heights', () => {
    expect(trap([1, 2, 3, 4, 5])).toBe(0);
  });

  it('should return 0 for decreasing heights', () => {
    expect(trap([5, 4, 3, 2, 1])).toBe(0);
  });

  it('should handle single element', () => {
    expect(trap([5])).toBe(0);
  });

  it('should handle two elements', () => {
    expect(trap([3, 5])).toBe(0);
  });

  it('should handle simple pool', () => {
    expect(trap([3, 0, 3])).toBe(3);
  });

  it('should return 0 for all zeros', () => {
    expect(trap([0, 0, 0, 0])).toBe(0);
  });
});
