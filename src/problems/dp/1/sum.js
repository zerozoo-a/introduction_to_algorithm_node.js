/**
 *
 * @param {number} n
 * @returns {number}
 */
const sum = (n) => {
  if (n <= 0 || !Number.isInteger(n)) return 0;
  return n === 1 ? 1 : n + sum(n - 1);
  //   if (n === 1) return 1;
  //   return n + sum(n - 1);
};

const a = sum(5);
const b = sum(-1);
const c = sum("k");
console.log("sum(5): ", a);
console.log("sum(-1): ", b);
console.log("sum('k'): ", c);

/**
 * #2
 *
 * @param {number} n
 * @returns {number}
 */
const sum2 = (n) => {
  if (n <= 0 || !Number.isInteger(n)) return 0;
  let result = 0,
    i = 0;
  for (; i <= n; i++) {
    result += i;
  }
  return result;
};
