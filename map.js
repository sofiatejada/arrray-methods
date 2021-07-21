export const map = (arr, callback) => {
  // for(index value; condition to test when the loop should end; and a way to increment the index value)
  const newArr = [];

  for (let index = 0; index < arr.length; index++) {
    const item = arr[index];
    //THIS DOWN HERE DOES THE SAME THING AS PUSH
    newArr[index] = callback(item);
    newArr[index] = item;
    // newArr.push(item);
      
  }
  return newArr;
};


