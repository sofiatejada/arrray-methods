export const findIndex = (arr, callback) => {
  // let newArr = [];

  for (let index = 0; index < arr.length; index++) {
    const item = callback(arr[index]);
    if(item) {
      return [index];
    }
  }
};
