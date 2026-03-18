import { describe, it, expect } from 'vitest';
import canCompleteCircuit from './gas-station';

// pure return value - assert the result directly
describe('canCompleteCircuit', () => {
  it('should return 3 for gas=[1,2,3,4,5] cost=[3,4,5,1,2]', () => {
    expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toBe(3);
  });

  it('should return -1 when impossible', () => {
    expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toBe(-1);
  });

  it('should handle single station with enough gas', () => {
    expect(canCompleteCircuit([5], [3])).toBe(0);
  });

  it('should handle single station with not enough gas', () => {
    expect(canCompleteCircuit([1], [5])).toBe(-1);
  });

  it('should handle equal gas and cost', () => {
    expect(canCompleteCircuit([3, 3, 3], [3, 3, 3])).toBe(0);
  });

  it('should handle start at last station', () => {
    expect(canCompleteCircuit([0, 0, 10], [3, 3, 3])).toBe(2);
  });

  it('should handle start at first station', () => {
    expect(canCompleteCircuit([5, 1, 1], [2, 2, 2])).toBe(0);
  });
});
