import { describe, it, expect } from 'vitest';
import romanToInt from './roman-to-integer';

// pure return value - assert the result directly
describe('romanToInt', () => {
  it('should return 3 for III', () => {
    expect(romanToInt('III')).toBe(3);
  });

  it('should return 58 for LVIII', () => {
    expect(romanToInt('LVIII')).toBe(58);
  });

  it('should return 1994 for MCMXCIV', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });

  it('should return 4 for IV', () => {
    expect(romanToInt('IV')).toBe(4);
  });

  it('should return 9 for IX', () => {
    expect(romanToInt('IX')).toBe(9);
  });

  it('should return 40 for XL', () => {
    expect(romanToInt('XL')).toBe(40);
  });

  it('should return 900 for CM', () => {
    expect(romanToInt('CM')).toBe(900);
  });

  it('should return 1 for I', () => {
    expect(romanToInt('I')).toBe(1);
  });

  it('should return 3999 for MMMCMXCIX', () => {
    expect(romanToInt('MMMCMXCIX')).toBe(3999);
  });
});