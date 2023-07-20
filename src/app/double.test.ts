import double from './double';

describe('double tests', () => {
  test('double returns double of the argument given', () => {
    expect(double(2)).toBe(4);
  });
});
