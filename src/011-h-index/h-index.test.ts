import { describe, it, expect } from 'vitest';
import hIndex from './h-index';
import hIndexSort from './h-index-sort';

const testCases: { input: number[]; expected: number }[] = [
  { input: [3, 0, 6, 1, 5], expected: 3 },
  { input: [1, 3, 1], expected: 1 },
  { input: [0], expected: 0 },
  { input: [100], expected: 1 },
  { input: [0, 0, 0], expected: 0 },
  { input: [1, 1, 1, 1], expected: 1 },
  { input: [10, 8, 5, 4, 3], expected: 4 },
  { input: [25, 8, 5, 3, 3], expected: 3 },
];

// pure return value - assert the result directly
describe('hIndex (counting sort)', () => {
  testCases.forEach(({ input, expected }) => {
    it(`should return ${expected} for [${input}]`, () => {
      expect(hIndex([...input])).toBe(expected);
    });
  });
});

// pure return value - assert the result directly
describe('hIndexSort (sort + scan)', () => {
  testCases.forEach(({ input, expected }) => {
    it(`should return ${expected} for [${input}]`, () => {
      expect(hIndexSort([...input])).toBe(expected);
    });
  });
});
