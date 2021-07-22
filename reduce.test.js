import { reduce } from './reduce';

describe('reduce', () => {
  it('does lots of stuff i guess, i don\'t get it yet', () => {
    const originalArray = [1, 2, 3];
    const callback = (acc, item) => acc + item;
    const actual = reduce(originalArray, callback);
    const expected = 6;

    expect(actual).toEqual(expected);
  });
});
