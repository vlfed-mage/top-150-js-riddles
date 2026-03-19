// Row Simulation (bounce between top and bottom)
//
// Example: s = "PAYPALISHIRING", numRows = 4
//
//   Row 0: P     I     N
//   Row 1: A   L S   I G
//   Row 2: Y A   H R
//   Row 3: P     I
//
// Walk through characters, bounce direction at row 0 and row numRows-1.
// Concatenate all rows at the end: "PINALSIGYAHRPI"
const zigzagConvert = (s: string, numRows: number): string => {
  if (numRows === 1) {
    return s;
  }

  const rows: string[] = new Array(numRows).fill('');
  let row: number = 0;
  let step: number = 1;

  for (let i: number = 0; i < s.length; i++) {
    rows[row] += s[i];

    if (row === numRows - 1) {
      step = -1;
    } else if (row === 0) {
      step = 1;
    }

    row += step;
  }

  return rows.join('');
};

export default zigzagConvert;