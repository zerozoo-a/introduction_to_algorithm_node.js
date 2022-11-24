/**
 * 가장 간단한 형태의 피보나치 수열 문제 풀이
 *
 * 수행 속도: O(n^2)
 *
 * @param {number} n
 * @returns {number}
 */
function simple_fib(N) {
  if (N < 2) return N;
  if (N === 2) return 1;

  return simple_fib(N - 1) + simple_fib(N - 2);
}

/**
 *
 * @param {number} N
 * @returns {number}
 */
function memo_fib(N) {
  if (N === 0) return 0;
  const memo = new Array(N);
  return helper(memo, N);
}

/**
 *
 * @param {&Array<number>} memo
 * @param {number} N
 * @return {number}
 */
function helper(memo, N) {
  if (N === 1 || N === 2) return 1;
  if (memo[N] !== undefined) return memo[N];

  memo[N] = helper(memo, N - 1) + helper(memo, N - 2);
  return memo[N];
}

/**
 * @param {number} N
 * @return {number}
 */
function fib_bottom_up(N) {
  if (N === 0) return 0;
  if (N === 1 || N === 2) return 1;
  const dp = new Array(N);
  dp[1] = dp[2] = 1;

  for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[N];
}

const bottom_up = fib_bottom_up(10);
console.log("bottom up", bottom_up);

/**
 * 상태 압축을 통해 공간 복잡도 O(n)에서 O(2)로 줄어들었다.
 *
 * @param {number} N
 * @return {number}
 */
function fib_pressed(N) {
  if (N === 0) return 0;
  if (N === 2 || N === 1) return 1;

  let prev = 1,
    curr = 1,
    i = 3;

  for (; i <= N; i++) {
    const sum = prev + curr;
    prev = curr;
    curr = sum;
  }

  return curr;
}

const pressed = fib_pressed(5);
