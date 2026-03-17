import { describe, it, expect } from 'vitest';
import canJump from './jump-game';

// pure return value — assert the result directly
describe('canJump', () => {
  it('should return true for [2,3,1,1,4]', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
  });

  it('should return false for [3,2,1,0,4]', () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false);
  });

  it('should handle single element', () => {
    expect(canJump([0])).toBe(true);
  });

  it('should handle two elements reachable', () => {
    expect(canJump([1, 0])).toBe(true);
  });

  it('should handle two elements unreachable', () => {
    expect(canJump([0, 1])).toBe(false);
  });

  it('should handle large jump at start', () => {
    expect(canJump([5, 0, 0, 0, 0, 0])).toBe(true);
  });

  it('should handle all zeros except first', () => {
    expect(canJump([0, 0, 0])).toBe(false);
  });
});
