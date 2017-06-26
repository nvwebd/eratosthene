const eratosthene = require('../src/source/eratosthene');

test('Max limit outputs Primes from 1 to N(maxLimit)', () => {
  const funcPrimes = eratosthene([20]);
  const expectPrimes = [1, 2, 3, 5, 7, 11, 13, 17, 19];

  expect(funcPrimes).toEqual(expectPrimes);
});

test('Filtering using 10-40 returns the Primes in that constraint', () => {
  const funcPrimes = eratosthene([20, 10, 40, undefined]);
  const expectPrimes = [11, 13, 17, 19, 23, 29, 31, 37];

  expect(funcPrimes).toEqual(expectPrimes);
});

test('Filtering using a number that the Prime has to have', () => {
  const funcPrimes1 = eratosthene([20, 10, 40, 1]);
  const expectPrimes1 = [11, 13, 17, 19, 31];

  const funcPrimes2 = eratosthene([20, 10, 40, 2]);
  const expectPrimes2 = [23, 29];


  expect(funcPrimes1).toEqual(expectPrimes1);
  expect(funcPrimes2).toEqual(expectPrimes2);
});
