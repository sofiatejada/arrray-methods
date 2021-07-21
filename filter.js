export const filter = (arr, callback) => {
  const newArr = [];

  for (let index = 0; index < arr.length; index++) {
    const item = arr[index];

    if(callback(item))
      newArr[index] = callback(item);
      
  }
  return newArr;
};

