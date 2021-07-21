export const findIndex = (arr, callback) => {
  const newArr = [];

  for (let index = 0; index < arr.length; index++) {
    const item = callback(arr[index]);
    console.log(item);
    if(item) {
      newArr[index] = index;
    }
  }
  return newArr;
};
