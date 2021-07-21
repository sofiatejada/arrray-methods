import { reduce } from './reduce';

describe('reduce', () => {
  it('does lots of stuff i guess, i don\'t get it yet', () => {
    const originalArray = [];
    const callback = (acc, item) => {};
    const actual = reduce(originalArray, callback, initialValue);
    const expected = [];

    expect(actual).toEqual(expected);
  });
});
