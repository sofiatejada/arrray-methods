import { findIndex } from './find-index';

describe('findIndex', () => {
  it('returns the index of the first item whose callback returns true or a truthy value', () => {
    const originalArray = [25, 1, 36, 217, 3, 21, 24];
    const callback = (item) => (item % 2 === 0);
    const actual = findIndex(originalArray, callback);
    const expected = [2];

    expect(actual).toEqual(expected);
  });
});
