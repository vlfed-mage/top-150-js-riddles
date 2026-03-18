import { describe, it, expect } from 'vitest';
import lengthOfLastWord from './length-of-last-word';

// pure return value - assert the result directly
describe('lengthOfLastWord', () => {
  it('should return 5 for "Hello World"', () => {
    expect(lengthOfLastWord('Hello World')).toBe(5);
  });

  it('should handle trailing spaces', () => {
    expect(lengthOfLastWord('   fly me   to   the moon  ')).toBe(4);
  });

  it('should return 6 for "luffy is still joyboy"', () => {
    expect(lengthOfLastWord('luffy is still joyboy')).toBe(6);
  });

  it('should handle single word', () => {
    expect(lengthOfLastWord('hello')).toBe(5);
  });

  it('should handle single character', () => {
    expect(lengthOfLastWord('a')).toBe(1);
  });

  it('should handle leading and trailing spaces', () => {
    expect(lengthOfLastWord('  word  ')).toBe(4);
  });
});
