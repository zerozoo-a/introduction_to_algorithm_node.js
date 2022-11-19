const bubbleSort = require("../../src/algorithm/sorts/bubble").bubbleSort;

test("bubble sort는 숫자 배열을 정렬한다.", () => {
  expect(bubbleSort([3, 5, 1, 2])).toStrictEqual([1, 2, 3, 5]);
});
