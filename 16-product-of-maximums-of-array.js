function maxProduct(numbers, size){
//   Sort the numbers array in descending order
  numbers = numbers.sort((a, b) => b - a);
  let product = 1;
  
//   Since the array is already sorted highest values first, you can you iterate over array up to "size" (not array.length)
  for (let i = 0; i < size; i++) {
    product *= numbers[i];
  }
  
  return product;
}

function maxProduct(numbers, size){
  if (size <= 0 || numbers.length === 0) {
    return 0; // Return 0 if size is non-positive or the array is empty.
  }

//   Sort the numbers array in descending order
  numbers = numbers.sort((a, b) => b - a);
  let product = 1;
  
//   Since the array is already sorted highest values first, you can you iterate over array up to "size" 
  for (let i = 0; i < size && i < numbers.length; i++) {
    product *= numbers[i];
  }
  
  return product;
}
