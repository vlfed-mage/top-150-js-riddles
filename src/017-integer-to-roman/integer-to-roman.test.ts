import { describe, it, expect } from 'vitest';
import intToRoman from './integer-to-roman';

// pure return value - assert the result directly
describe('intToRoman', () => {
  it('should return MMMDCCXLIX for 3749', () => {
    expect(intToRoman(3749)).toBe('MMMDCCXLIX');
  });

  it('should return LVIII for 58', () => {
    expect(intToRoman(58)).toBe('LVIII');
  });

  it('should return MCMXCIV for 1994', () => {
    expect(intToRoman(1994)).toBe('MCMXCIV');
  });

  it('should return I for 1', () => {
    expect(intToRoman(1)).toBe('I');
  });

  it('should return IV for 4', () => {
    expect(intToRoman(4)).toBe('IV');
  });

  it('should return IX for 9', () => {
    expect(intToRoman(9)).toBe('IX');
  });

  it('should return MMMCMXCIX for 3999', () => {
    expect(intToRoman(3999)).toBe('MMMCMXCIX');
  });

  it('should return CD for 400', () => {
    expect(intToRoman(400)).toBe('CD');
  });
});