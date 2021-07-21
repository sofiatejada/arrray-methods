import { map } from './map';

describe('map', () => {
  it('grabs an array, creates a new array with an implemented callback', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const callback = (item) => item * 2;
    const actual = map(originalArray, callback);
    const expected = [2, 4, 6, 8, 10];

    expect(actual).toEqual(expected);
  });
});
