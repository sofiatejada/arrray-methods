export const filter = (arr, callback) => {
  let newArr = [];

  for (let index = 0; index < arr.length; index++) {
    const item = callback(index);
    if(item === true) {
      newArr = [...newArr, item];
    }
  }
  return newArr;
};

