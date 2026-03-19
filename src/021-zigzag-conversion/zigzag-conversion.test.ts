import { describe, it, expect } from 'vitest';
import zigzagConvert from './zigzag-conversion';

// pure return value - assert the result directly
describe('zigzagConvert', () => {
  it('should return "PAHNAPLSIIGYIR" for 3 rows', () => {
    expect(zigzagConvert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
  });

  it('should return "PINALSIGYAHRPI" for 4 rows', () => {
    expect(zigzagConvert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
  });

  it('should handle single row', () => {
    expect(zigzagConvert('A', 1)).toBe('A');
  });

  it('should handle numRows equal to string length', () => {
    expect(zigzagConvert('ABC', 3)).toBe('ABC');
  });

  it('should handle numRows greater than string length', () => {
    expect(zigzagConvert('AB', 4)).toBe('AB');
  });

  it('should handle two rows', () => {
    expect(zigzagConvert('ABCDE', 2)).toBe('ACEBD');
  });

  it('should handle single character', () => {
    expect(zigzagConvert('X', 5)).toBe('X');
  });
});