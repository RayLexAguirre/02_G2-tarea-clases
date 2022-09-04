import Range from '../src/range';

test('range.getAllNumbers()', () => {
  let obj = new Range(10, 20);

  expect(obj.getAllNumbers()).toEqual([
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ]);
});
