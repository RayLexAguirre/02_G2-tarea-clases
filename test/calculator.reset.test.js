import Calculator from '../src/calculator';

test('calculator.reset()', () => {
  let obj = new Calculator();

  obj.value = 2;
  expect(obj.reset()).toBe(0);
  expect(obj.value).toBe(0);
});
