import Range from '../src/range';

test('range.getSum()', () => {
  let obj = new Range(10, 20);

  expect(obj.getSum()).toBe(165);
});
