import { describe, it, expect } from 'vitest';
import jump from './jump-game-ii';

// pure return value — assert the result directly
describe('jump', () => {
  it('should return 2 for [2,3,1,1,4]', () => {
    expect(jump([2, 3, 1, 1, 4])).toBe(2);
  });

  it('should return 2 for [2,3,0,1,4]', () => {
    expect(jump([2, 3, 0, 1, 4])).toBe(2);
  });

  it('should handle single element', () => {
    expect(jump([0])).toBe(0);
  });

  it('should handle two elements', () => {
    expect(jump([1, 0])).toBe(1);
  });

  it('should handle large first jump', () => {
    expect(jump([5, 0, 0, 0, 0, 0])).toBe(1);
  });

  it('should handle step-by-step jumps', () => {
    expect(jump([1, 1, 1, 1])).toBe(3);
  });

  it('should handle optimal path selection', () => {
    expect(jump([1, 2, 1, 1, 1])).toBe(3);
  });
});