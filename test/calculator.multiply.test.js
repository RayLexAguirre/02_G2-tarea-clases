import Calculator from '../src/calculator';

test('calculator.multiply()', () => {
  let obj = new Calculator();

  obj.value = 2;
  expect(obj.multiply(2)).toBe(4);
  expect(obj.value).toBe(4);
  expect(obj.multiply(3)).toBe(12);
  expect(obj.value).toBe(12);
});
