/**
 *
 * @param {number[]} coins
 * @param {number} amount
 * @returns {number}
 */
const coinChange = (coins, amount) => {
  /**
   *
   * @param {number} n
   * @returns {0 | -1}
   */
  const dp = (n) => {
    if (n === 0) return 0;
    if (n < 0) return -1;

    let res = Infinity;
    for (const coin of coins) {
      const subproblem = dp(n - coin);
      if (subproblem === -1) continue;

      res = Math.min(res, 1 + subproblem);
    }

    if (res !== Infinity) {
      return res;
    }
    return -1;
  };

  return dp(amount);
};

const k = coinChange([1, 2, 3, 4, 5, 6], 10);
console.log(">>> k ", k);

/**
 *
 * @param {number[]} coins
 * @param {number} amount
 */
const changer = (coins, amount) => {
  const map = new Map();
  /**
   *
   * @param {number} n
   * @returns {number}
   */
  const dp = (n) => {
    if (map.has(n)) return map.get(n);
    if (n === 0) return 0;
    if (n < 0) return -1;

    let res = Infinity;
    for (const coin of coins) {
      let sub = dp(n - coin);
      if (sub === -1) continue;

      res = Math.min(res, 1 + sub);
    }

    if (res !== Infinity) {
      map.set(n, res);
    } else {
      map.set(n, -1);
    }
    return map.get(n);
  };

  return dp(amount);
};
