const N = 5;

/**
 * #3
 *
 * @param {number} n
 * @returns {number}
 */
const factorial = (n) => {
  if (n <= 1) return 1;

  return n * factorial(n - 1);
};

console.log(factorial(N));

/**
 * #4
 *
 * @param {number} n
 * @returns {number}
 */
const factorial2 = (n) => {
  if (n <= 1) return 1;

  let result = 1,
    i = 2;
  for (; i <= n; i++) {
    result *= i;
  }

  return result;
};

console.log(factorial2(N));
