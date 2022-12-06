/**
 *
 * @param {char} s
 * @param {char} d
 * @param {char} e
 * @param {number} n
 * @returns
 */
const towerOfHanoi = (s, d, e, n) => {
  if (n <= 0) return;

  towerOfHanoi(s, e, d, n - 1);
  console.log(`원판 ${n}을 ${s}에서 ${d}로 이동합니다.`);
  towerOfHanoi(e, d, s, n - 1);
};
const main = () => {
  towerOfHanoi("s", "d", "e", 3);
};

main();
