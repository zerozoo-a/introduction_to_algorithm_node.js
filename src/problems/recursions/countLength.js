/**
 * 문자열의 길이를 반환합니다.
 *
 * @param {string} str
 * @returns
 */
const countLength = (str) => {
  if (str === "") return 0;

  return 1 + countLength(str.substring(1));
};

const main = (() => {
  const len = countLength("abc");
  console.log("🚀 ~ file: countLength.js:14 ~ main ~ len", len);
})();
