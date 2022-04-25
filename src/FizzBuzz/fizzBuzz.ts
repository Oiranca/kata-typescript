export const fizzBuzzGame = (classRoomList: number) => {
  if (classRoomList % 3 === 0 && classRoomList % 5 === 0) {
    return 'FizzBuzz';
  }

  if (classRoomList % 3 === 0) {
    return 'Fizz';
  }

  if (classRoomList % 5 === 0) {
    return 'Buzz';
  }
  return classRoomList;
};


