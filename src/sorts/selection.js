/**
 *
 * @description
 * 선택정렬은 O(n^2)시간을 소요한다.
 *
 * 배열 [3,2,1]을 선택정렬을 통해 정렬한다면,
 *
 * 배열의 0 번째 인덱스를 첫 min 값으로 잡는다.
 * 이제 내부의 반복문은 첫 인덱스 + 1 번째부터 배열을 순회하게 된다.
 *
 * 3과 2를 비교해본다. 2가 더 작은 숫자이므로 min 값을 2로 업데이트한다.
 * 내부 반복문의 인덱스 값이 증가하여 배열의 2번째 인덱스를 가리키고
 * 현재의 min값과 값을 비교한다. 만약 더 적은 숫자라면 min 값을 업데이트한다.
 *
 * 이렇게 배열을 모두 순회하였고 해당 배열중 가장 적은 값을 알아내었다.
 *
 *
 * @param {number[]} A
 * @returns {number[]}
 *
 */
exports.selectionSort = function (A) {
  for (let i = 0; i < A.length; i++) {
    /**@type {number} */
    let min = i;
    for (let j = i + 1; j < A.length; j++) {
      if (A[min] > A[j]) {
        min = j;
      }
    }
    if (A[i] > A[min]) {
      [A[i], A[min]] = [A[min], A[i]];
    }
  }
  return A;
};
