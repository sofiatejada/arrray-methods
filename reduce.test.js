import { reduce } from './reduce';

describe('reduce', () => {
  it('does lots of stuff i guess, i don\'t get it yet', () => {
    const originalArray = [2, 18, 25, 1, 36, 217, 3, 21, 24];
    const callback = (acc, item) => {};
    const actual = reduce(originalArray, callback, 0);
    const expected = [];

    expect(actual).toEqual(expected);
  });
});
