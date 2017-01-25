import test from 'ava';
import sum from '../src/js/test-example';

test('Fail test example title', (t) => {
  t.fail();
});

test('Complete test example title', (t) => {
  t.pass();
});

test('Sum test', (t) => {
  const expected = 10;
  const actual = sum(3, 7);
  t.is(actual, expected);
});
