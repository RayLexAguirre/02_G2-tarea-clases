import Calculator from '../src/calculator';

test('calculator.constructor()', () => {
  let obj = new Calculator();

  expect(obj.value).toBe(0);
});
