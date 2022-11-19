const insertionSorts =
  require("../../src/algorithm/sorts/insertion").insertionSorts;
describe("sorts는 숫자 배열을 sorting한다.", () => {
  const A = [1, 3, 7, 5, 2];
  const B = [1, 2, 3];

  it("insertion sort", () => {
    expect(insertionSorts.insertionSort(A)).toStrictEqual([1, 2, 3, 5, 7]);
  });

  it("insertionDesc sort", () => {
    const k = insertionSorts.insertionSortDesc(B);
    expect(insertionSorts.insertionSortDesc(A)).toStrictEqual([7, 5, 3, 2, 1]);
  });
});
