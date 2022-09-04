import Calculator from '../src/calculator';

test('calculator.add()', () => {
  let obj = new Calculator();

  expect(obj.add(10)).toBe(10);
  expect(obj.value).toBe(10);
  expect(obj.add(10)).toBe(20);
  expect(obj.value).toBe(20);
  expect(obj.add(5)).toBe(25);
  expect(obj.value).toBe(25);
});
