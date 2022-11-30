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
      if (subproblem === -1) continue; // -1 인 경우 수를 헤아릴 필요가 없다.

      res = Math.min(res, 1 + subproblem);
    }

    if (res !== Infinity) {
      return res;
    }
    return -1;
  };

  return dp(amount);
};

// const k = coinChange([1, 2, 3, 4, 5, 6], 10);
// console.log(">>> k ", k);

/**
 *
 * @param {number[]} coins
 * @param {number} amount
 */
const coinChanger = (coins, amount) => {
  const memo = new Map();

  /**
   *
   * @param {number} n
   * @returns {0 | -1}
   */
  const dp = (n) => {
    if (memo.has(n)) return memo.get(n);

    // case: 기저조건
    if (n === 0) return 0; // 맞아 떨어짐
    if (n < 0) return -1; // 맞아 떨어지지 않음

    let res = Infinity,
      i = 0,
      l = coins.length;

    for (; i < l; i++) {
      const subproblem = dp(n - coins[i]);
      if (subproblem === -1) continue; // res에 저장하지 않고 넘어감

      res = Math.min(res, 1 + subproblem); // (n - 1) 개의 하위구조를 구한 셈이므로 + 1 해준다.
    }

    // 반복문이 끝나면 dp의 재귀도 끝났다는 의미이므로 적절한 값을 반환한다.
    // res가 아직도 Infinity인 경우에는 값을 찾지 못했다는 의미이다.
    if (res === Infinity) {
      memo.set(n, -1); // dp 함수에 대한 반환값이다. -1을 반환한 경우 상위 스택은 continue를 발동한다.
    } else {
      memo.set(n, res); // 반환 할 만한 값이 있는 경우 저장한다.
    }

    return memo.get(n);
  };
  return dp(amount);
};

// const a1 = coinChanger([1, 2, 3, 4, 5], 4);
// console.log("a1 >>> ", a1);

/**
 *
 * @param {number[]} coins
 * @param {number} amount
 */
const coinChangerBottomToUp = (coins, amount) => {
  const dp = new Array(amount + 1).fill(amount + 1);

  /** case: 기저 조건 */
  dp[0] = 0;

  for (let i = 0; i < dp.length; i++) {
    for (const coin of coins) {
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
};

const a2 = coinChangerBottomToUp([1], 1);
console.log("a2 >>> ", a2);
