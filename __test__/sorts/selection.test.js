const { selectionSort } = require("../../src/sorts/selection");

test("selectionSort는 오름차순 정렬을 O(n^2)의 시간복잡도를 통해 수행한다.", () => {
  expect(selectionSort([3, 4, 5, 1, 2])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(selectionSort([3, 1, 2])).toStrictEqual([1, 2, 3]);
  expect(selectionSort([3, 2, 1])).toStrictEqual([1, 2, 3]);
  expect(selectionSort([1, 1, 1])).toStrictEqual([1, 1, 1]);
});
