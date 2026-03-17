// Greedy (track min price)
const maxProfit = (prices: number[]): number => {
  let min: number = prices[0];
  let profit: number = 0;

  for (let i: number = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      profit = Math.max(profit, prices[i] - min);
    }
  }

  return profit;
};

export default maxProfit;
