export const filter = (arr, callback) => {
  let newArr = [];

  for (let index = 0; index < arr.length; index++) {
    const item = callback(arr[index]);
    if(item) {
      console.log(arr[index]);
      newArr = [...newArr, arr[index]];
    }
  }
  return newArr;
};

