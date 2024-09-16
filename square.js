// square.js

function* squareIterator(arr) {
    for (const num of arr) {
      yield num * num;
    }
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const squares = squareIterator(numbers);
  
  // Using next to iterate over squares
  while (true) {
    const { value, done } = squares.next();
    if (done) {
      break;
    }
    console.log(value);
  }