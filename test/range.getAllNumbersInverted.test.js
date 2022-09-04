import Range from '../src/range';

test('range.getAllNumbersInverted()', () => {
  let obj = new Range(10, 20);

  expect(obj.getAllNumbersInverted()).toEqual([
    20,
    19,
    18,
    17,
    16,
    15,
    14,
    13,
    12,
    11,
    10,
  ]);
});
