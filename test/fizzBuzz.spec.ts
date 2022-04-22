import {fizzBuzzGame} from '../src/FizzBuzz/fizzBuzz';

describe('Game FizzBuzz', () => {
  it('is not divisible by three or five', () => {
    const numberNotDivide = 1;
    const isNotDivisibleByThreeOrFive = fizzBuzzGame(numberNotDivide);
    expect(isNotDivisibleByThreeOrFive).toContain(numberNotDivide);
  });

  it('is divisible by three write Fizz', () => {
    const numberNotDivide = 9;
    const isNotDivisibleByThreeOrFive = fizzBuzzGame(numberNotDivide);
    expect(isNotDivisibleByThreeOrFive).toContain('Fizz');
  });
  it('is divisible by five write Buzz', () => {
    const numberNotDivide = 25;
    const isNotDivisibleByThreeOrFive = fizzBuzzGame(numberNotDivide);
    expect(isNotDivisibleByThreeOrFive).toContain('Buzz');
  });
  it('is divisible by three and five write FizzBuzz', () => {
    const numberNotDivide = 15;
    const isNotDivisibleByThreeOrFive = fizzBuzzGame(numberNotDivide);
    expect(isNotDivisibleByThreeOrFive).toContain('FizzBuzz');
  });
});
