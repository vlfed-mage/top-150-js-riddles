// Greedy (collect every uphill)
const maxProfitII = (prices: number[]): number => {
  let profit: number = 0;

  for (let i: number = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
};

export default maxProfitII;
