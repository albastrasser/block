const letsSortTheRainbow = require('./colors');

test('should handle an empty array', () => {
  expect(letsSortTheRainbow([], ['red'])).toStrictEqual([]);
  expect(letsSortTheRainbow(['red'], [])).toStrictEqual([]);
});

test('should handle sorting multiple colors', () => {
  expect(
    letsSortTheRainbow(
      ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'],
      ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
    )
  ).toStrictEqual([
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ]);

  expect(
    letsSortTheRainbow(
      ['red', 'red', 'yellow', 'orange'],
      ['red', 'orange', 'yellow']
    )
  ).toStrictEqual(['red', 'red', 'orange', 'yellow']);
});

test('should return an empty array if no values are the same', () => {
  expect(
    letsSortTheRainbow(
      ['red', 'orange', 'yellow'],
      ['green', 'blue', 'violent']
    )
  ).toStrictEqual([]);
});

test('should exclude values not in the order array and items array', () => {
  expect(
    letsSortTheRainbow(['red', 'orange', 'orange'], ['orange', 'blue'])
  ).toStrictEqual(['orange', 'orange']);
});

test('should pass the example test', () => {
  expect(
    letsSortTheRainbow(
      ['red', 'blue', 'red', 'green', 'blue'],
      ['blue', 'red', 'black']
    )
  ).toStrictEqual(['blue', 'blue', 'red', 'red']);
});

// I believe if there are double values in the order then we should double up the array. That's a question I would have asked!

test('should double up if there are repeat values in order', () => {
  expect(
    letsSortTheRainbow(
      ['blue', 'red', 'green', 'blue'],
      ['blue', 'red', 'blue']
    )
  ).toStrictEqual(['blue', 'blue', 'red', 'blue', 'blue']);
});
