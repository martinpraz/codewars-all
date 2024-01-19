function setReducer(arr) {
  function reduceSingleStep(arr) {
    const result = [];
    let i = 0;
    while (i < arr.length) {
      let count = 1;
      while (i + 1 < arr.length && arr[i] === arr[i + 1]) {
        count++;
        i++;
      }
      if (count > 1) {
        result.push(count);
      } else {
        result.push(1);
      }
      i++;
    }
    return result;
  }

  while (arr.length > 1) {
    arr = reduceSingleStep(arr);
  }

  return arr[0];
}
