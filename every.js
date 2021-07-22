export const every = (arr, callback) => {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    const item = callback(arr[index]);
    if(item) {
      newArr = [...newArr, arr[index]];
      return true;
    } else {
      return false;
    }
  }
};
