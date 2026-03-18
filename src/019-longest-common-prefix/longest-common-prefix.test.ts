import { describe, it, expect } from 'vitest';
import longestCommonPrefix from './longest-common-prefix';

// pure return value - assert the result directly
describe('longestCommonPrefix', () => {
  it('should return "fl" for ["flower","flow","flight"]', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  });

  it('should return "" when no common prefix', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  });

  it('should handle single string', () => {
    expect(longestCommonPrefix(['hello'])).toBe('hello');
  });

  it('should handle identical strings', () => {
    expect(longestCommonPrefix(['abc', 'abc', 'abc'])).toBe('abc');
  });

  it('should handle empty string in array', () => {
    expect(longestCommonPrefix(['', 'abc'])).toBe('');
  });

  it('should handle one character prefix', () => {
    expect(longestCommonPrefix(['ab', 'ac'])).toBe('a');
  });

  it('should handle first string being shortest', () => {
    expect(longestCommonPrefix(['ab', 'abc', 'abcd'])).toBe('ab');
  });
});
