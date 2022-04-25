import {fizzBuzzGame} from '../src/FizzBuzz/fizzBuzz';


describe('Game FizzBuzz', () => {
  it('is not divisible by three or five', () => {
    const numberNotDivide = 1;
    expect(fizzBuzzGame(numberNotDivide)).toBe(numberNotDivide);
  });

  it('is divisible by three and five', () => {
    const numberNotDivide = 15;
    expect(fizzBuzzGame(numberNotDivide)).toBe('FizzBuzz');
  });
  it('is divisible by three', () => {
    const numberNotDivide = 9;
    expect(fizzBuzzGame(numberNotDivide)).toBe('Fizz');
  });
  it('is divisible by five', () => {
    const numberNotDivide = 25;
    expect(fizzBuzzGame(numberNotDivide)).toBe('Buzz');
  });
});
