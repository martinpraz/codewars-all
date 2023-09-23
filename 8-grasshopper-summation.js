var summation = function (num) {
  let numList = [];
  for (let i = 1; i <= num; i++) {
    numList.push(i);
  }
  return numList.reduce((a, b) => a + b);
  
}
