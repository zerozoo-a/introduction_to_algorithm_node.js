const INT = 4;
const cost = [
  [0, 10, 75, 94],
  [-1, 0, 35, 50],
  [-1, -1, 0, 80],
  [-1, -1, -1, 0],
];

/**
 *
 * @param {number} s
 * @param {number} d
 */
const minCost = (s, d) => {
  if (s === d || s === d - 1) return cost[s][d];

  let minValue = cost[s][d];
  for (let i = s + 1; i < d; i++) {
    const temp = minCost(s, i) + minCost(i, d);

    if (temp < minValue) minValue = temp;
  }

  return minValue;
};

const main = (() => {
  const result = minCost(0, 2);
  console.log("result: ", result);
})();
