var summation = function (num) {
  let numList = [];
  for (let i = 1; i <= num; i++) {
    numList.push(i);
  }
  return numList.reduce((a, b) => a + b);
  
}

let summation = function(num) {
  // using formula for sum of arithmetic series
  return (num * (num + 1)) / 2;
}
