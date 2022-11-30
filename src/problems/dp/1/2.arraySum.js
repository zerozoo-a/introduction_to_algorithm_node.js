/**
 *
 * @param {number[]} numbers
 */
const accumulate = (numbers) => {
  /**
   *
   * @param {number} c
   */
  const dp = (c) => {
    if (c === numbers.length - 1) return numbers;

    numbers[c + 1] += numbers[c];
    c++;
    dp(c);
  };
  dp(0, numbers[0]);
  return numbers;
};

const calc = accumulate([1, 2, 3, 4, 5, 6]);
console.log(calc);
