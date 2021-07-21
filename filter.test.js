import { filter } from './filter';

describe('filter', () => {
  it('creates a new array with all items whose callback returned true or a truthy value', () => {
    const originalArray = [2, 18, 25, 1, 36, 217, 3, 21, 24];
    const callback = (item) => item % 2 === 0;
    const actual = filter(originalArray, callback);
    const expected = [2, 18, 36, 24];

    expect(actual).toEqual(expected);
  });
});
