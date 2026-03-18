import { describe, it, expect } from 'vitest';
import maxProfitII from './best-time-to-buy-and-sell-stock-ii';

// pure return value - assert the result directly
describe('maxProfitII', () => {
  it('should return 7 for [7,1,5,3,6,4]', () => {
    expect(maxProfitII([7, 1, 5, 3, 6, 4])).toBe(7);
  });

  it('should return 4 for increasing prices', () => {
    expect(maxProfitII([1, 2, 3, 4, 5])).toBe(4);
  });

  it('should return 0 for decreasing prices', () => {
    expect(maxProfitII([7, 6, 4, 3, 1])).toBe(0);
  });

  it('should handle single element', () => {
    expect(maxProfitII([5])).toBe(0);
  });

  it('should handle two elements with profit', () => {
    expect(maxProfitII([1, 5])).toBe(4);
  });

  it('should handle all same prices', () => {
    expect(maxProfitII([3, 3, 3, 3])).toBe(0);
  });

  it('should handle alternating prices', () => {
    expect(maxProfitII([1, 5, 2, 8])).toBe(10);
  });
});
