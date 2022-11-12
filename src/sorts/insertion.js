/**
 *
 * @param {number[]} A
 */
function insertionSort(A) {
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
}

const a = insertionSort([3, 1, 2]);
console.log("a", a); // [1, 2, 3]

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentValue = arr[i];
//     let j;
//     for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentValue;
//   }
//   return arr;
// }
// console.log(insertionSort([2, 1, 3, 7, 5])); // [1, 2, 3, 5, 7]
