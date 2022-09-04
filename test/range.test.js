import Range from '../src/range';

test('range.constructor()', () => {
  let obj = new Range(10, 20);

  expect(obj.start).toBe(10);
  expect(obj.end).toBe(20);
});
