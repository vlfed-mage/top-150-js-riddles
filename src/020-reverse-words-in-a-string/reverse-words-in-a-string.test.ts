import { describe, it, expect } from 'vitest';
import reverseWords, {
  reverseWordsManual,
} from './reverse-words-in-a-string';

const testCases: { input: string; expected: string }[] = [
  { input: 'the sky is blue', expected: 'blue is sky the' },
  { input: '  hello world  ', expected: 'world hello' },
  { input: 'a good   example', expected: 'example good a' },
  { input: 'word', expected: 'word' },
  { input: '  spaces  ', expected: 'spaces' },
  { input: 'a b', expected: 'b a' },
];

// pure return value - assert the result directly
describe('reverseWords (built-in reverse)', () => {
  testCases.forEach(({ input, expected }) => {
    it(`should return "${expected}" for "${input}"`, () => {
      expect(reverseWords(input)).toBe(expected);
    });
  });
});

// pure return value - assert the result directly
describe('reverseWordsManual (two pointers)', () => {
  testCases.forEach(({ input, expected }) => {
    it(`should return "${expected}" for "${input}"`, () => {
      expect(reverseWordsManual(input)).toBe(expected);
    });
  });
});
