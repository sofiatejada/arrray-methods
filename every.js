export const every = (arr, callback) => {
  for (let index = 0; index < arr.length; index++) {
    const item = arr[index];
    if(item) {
      return true;
    } else {
      return false;
    }
  }
};
