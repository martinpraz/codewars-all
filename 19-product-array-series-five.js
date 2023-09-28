function productArray(numbers){
  let productArray = [];
  let product = 1;
  
  for (let i = 0; i < numbers.length; i++) {
    product = numbers.reduce((a, b) => a * b, 1);
    productArray.push(product / numbers[i]);
  }
  
  return productArray;
}

function productArray(numbers){
  return numbers.map(x => numbers.reduce((a,b) => a * b) / x)
}
