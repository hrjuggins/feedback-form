const sma = (arr: number[], period: number): number[] => {
  const avgs = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i < period) {
      avgs.push(arr[i]);
    } else {
      const periodGroup = [];
      for (let j = 0; j < period; j += 1) {
        periodGroup.push(arr[i - j]);
      }
      const sumGroup = periodGroup.reduce((a, b) => a + b, 0);

      const avgGroup = sumGroup / period || 0;
      avgs.push(avgGroup);
    }
  }
  return avgs;
};

export default sma;
