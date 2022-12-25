/**
 * 문자열을 입력받고 각 문자열의 char를 하나씩 프린트합니다.
 *
 * @param {string} str
 * @returns {void | char}
 */
const printChar = (str) => {
  if (str.length === 0) {
    return;
  }
  console.log("🚀 ~ file: printChar.js:6 ~ printChar ~ str", str.charAt(0));

  return printChar(str.substring(1));
};
const main = (() => {
  printChar("abc");
})();
