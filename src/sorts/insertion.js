/**
 *
 * @param {number[]} A
 */
exports.insertionSort = function insertionSort(A) {
  if (A.length < 2) return A;

  for (let j = 1; j < A.length; j++) {
    const key = A[j];
    let i = j - 1;
    while (i >= 0 && A[i] > key) {
      A[i + 1] = A[i];
      i--;
    }
    A[i + 1] = key;
  }
  return A;
};

console.log(__dirname);
