const sum = require('./sum');
const { hello } = require('./index');

test('adds 2 + 3 = 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('hello() returns "Hello World!"', () => {
  expect(hello()).toBe('Hello World!');
});

