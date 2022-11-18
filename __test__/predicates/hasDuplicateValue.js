/**
 *
 * @param {number[]} A
 * @return {boolean}
 */
function hasDuplicateValue(A) {
  const set = new Set();
  let result = false;

  for (let i = 0; i < A.length; i++) {
    if (set.has(A[i])) {
      result = true;
      break;
    } else {
      set.add(A[i]);
    }
  }

  return result;
}
