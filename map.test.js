import { map } from "./map";

describe('map', () => {
  it('takes an array and invokes the passed in callback function for each element in passed in array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const callback = (item) => item * 2;
    const result = map(originalArray, callback);
  });
});
