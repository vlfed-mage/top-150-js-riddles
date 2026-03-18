// Linear Scan (look ahead for subtraction)
// If current value < next value, subtract it (e.g., IV = -1 + 5 = 4)
// Otherwise, add it
const ROMAN_VALUES: ReadonlyMap<string, number> = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
]);

const romanToInt = (s: string): number => {
  let output: number = 0;

  for (let i: number = 0; i < s.length; i++) {
    const current: number = ROMAN_VALUES.get(s[i])!;
    const next: number = ROMAN_VALUES.get(s[i + 1]) ?? 0;

    if (current < next) {
      output -= current;
    } else {
      output += current;
    }
  }

  return output;
};

export default romanToInt;
