// Greedy (subtract largest value first)
// Use all 13 symbols (including subtractive forms) sorted descending.
// Repeatedly subtract the largest fitting value and append its symbol.
//
// Example: 1994
//   1994 >= 1000 → "M",    remaining: 994
//    994 >= 900  → "CM",   remaining: 94
//     94 >= 90   → "XC",   remaining: 4
//      4 >= 4    → "IV",   remaining: 0
//   Result: "MCMXCIV"
const VALUES: readonly [number, string][] = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
] as const;

const intToRoman = (num: number): string => {
  let result: string = '';
  let remaining: number = num;

  for (const [value, symbol] of VALUES) {
    while (remaining >= value) {
      result += symbol;
      remaining -= value;
    }
  }

  return result;
};

export default intToRoman;