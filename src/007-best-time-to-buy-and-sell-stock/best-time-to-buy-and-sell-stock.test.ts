import { describe, it, expect } from 'vitest';
import maxProfit from './best-time-to-buy-and-sell-stock';

// pure return value - assert the result directly
describe('maxProfit', () => {
  it('should return 5 for [7,1,5,3,6,4]', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it('should return 0 for decreasing prices', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  it('should handle single element', () => {
    expect(maxProfit([5])).toBe(0);
  });

  it('should handle two elements with profit', () => {
    expect(maxProfit([1, 5])).toBe(4);
  });

  it('should handle two elements without profit', () => {
    expect(maxProfit([5, 1])).toBe(0);
  });

  it('should handle min at the beginning', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });

  it('should handle all same prices', () => {
    expect(maxProfit([3, 3, 3, 3])).toBe(0);
  });
});
