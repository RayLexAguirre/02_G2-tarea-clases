import Calculator from '../src/calculator';

test('calculator.power()', () => {
  let obj = new Calculator();

  obj.value = 2;
  expect(obj.power(3)).toBe(8);
  expect(obj.value).toBe(8);
  expect(obj.power(2)).toBe(64);
  expect(obj.value).toBe(64);
});
