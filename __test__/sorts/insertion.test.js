const insertionSort = require("../../src/sorts/insertion").insertionSort;
describe("sorts는 숫자 배열을 sorting한다.", () => {
  const A = [1, 3, 7, 5, 2];

  it("insertion sort", () => {
    expect(insertionSort(A)).toStrictEqual([1, 2, 3, 5, 7]);
  });
});
