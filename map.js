export const map = (arr, callback) => {
  // for(index value; condition to test when the loop should end; and a way to increment the index value)
  const newArr = [];

  for (let index = 0; index < arr.length; index++) {
    const item = arr[index];
    //THIS DOWN HERE DOES THE SAME THING AS PUSH
    // reason why this is the same as push:
    // when the loop goes around, as long as index is less than the length of the array,
    // newArr at [index], will be set to the new evaluation of the next callback(item)
    newArr[index] = callback(item);
    //THOSE TWO DO THE SAME THING, PICK ONE
    // newArr.push(item);
      
  }
  return newArr;
};


