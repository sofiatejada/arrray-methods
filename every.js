export const every = (arr, callback) => {
  for (let index = 0; index < arr.length; index++) {
    let newArr = [];
    const item = callback(arr[index]);
    if(item) {
      newArr = [...newArr, arr[index]];
    } else {
      return false;
    }
  }
};
