import { every } from './every';

describe('every', () => {
  it('returns an overall true value if all callback return true or a truthy value', () => {
    const originalArray = [2, 18, 36, 24];
    const callback = (item) => (item % 2 === 0);
    const actual = every(originalArray, callback);
    const expected = true;

    expect(actual).toEqual(expected);
  });
  
  it('returns an overall false value if all callback return false or a falsy value', () => {
    const originalArray = [1, 18, 25, 1, 36, 217, 3, 21, 24];
    const callback = (item) => (item % 2 === 0);
    const actual = every(originalArray, callback);
    const expected = false;

    expect(actual).toEqual(expected);
  });
});
