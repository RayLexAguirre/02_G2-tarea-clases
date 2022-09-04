import Range from '../src/range';

test('range.getAllEven()', () => {
  let obj = new Range(10, 20);

  expect(obj.getAllEven()).toEqual([10, 12, 14, 16, 18, 20]);
});
