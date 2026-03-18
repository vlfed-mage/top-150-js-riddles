// Greedy (single pass with reset)
// If tank goes negative at station j, no station from start..j works,
// so reset start to j+1. If total gas >= total cost, a solution exists.
const canCompleteCircuit = (gas: number[], cost: number[]): number => {
  let total: number = 0;
  let tank: number = 0;
  let start: number = 0;

  for (let i: number = 0; i < gas.length; i++) {
    const diff: number = gas[i] - cost[i];
    total += diff;
    tank += diff;

    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }

  return total >= 0 ? start : -1;
};

export default canCompleteCircuit;
