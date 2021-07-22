export const reduce = (arr, callback) => {
  let acc = 0;
  for (let index = 0; index < arr.length; index++) {
    const item = arr[index];
    if(item) {
      acc = callback(acc, item);
    }
  }
  return acc;
};
