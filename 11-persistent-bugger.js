
function persistence(num) {
  // Convert the number to a string to work with its digits
  num = num.toString();
  
  // Keep track of the persistence count
  let persistenceCount = 0;
  
  // Keep looping until the number has only one digit
  while (num.length > 1) {
    // Multiply the digits of the number together
    let product = 1;
    for (let i = 0; i < num.length; i++) {
      product *= parseInt(num[i], 10);
    }
    
    // Update the number with the result of the multiplication
    num = product.toString();
    
    // Increment the persistence count
    persistenceCount++;
    
  }
  return persistenceCount;
}
