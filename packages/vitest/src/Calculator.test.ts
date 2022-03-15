import { Calculator } from './Calculator';

describe('Calculator', () => {
  const testAdd = (a: number, b: number, expected: number) => {
    const calculator = new Calculator();
    const actual = calculator.add(a, b);
    expect(actual).toEqual(expected);
  };

  Array.from({ length: 100000 }).forEach((_, i) => {
    test(`add ${i}`, () => {
      testAdd(i, i, i * 2);
    });
  });
});
