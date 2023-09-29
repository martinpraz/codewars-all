
function adjacentElementsProduct(array) {
  // finalProduct can't be set to "1" dum-dum, or every testCase where largest product is < 1 will crap out
  // Always try to set the initial value to something real from the actual problem
  let finalProduct = array[1] * array[0];
  let tempProduct;
  
  for (let i = 2; i < array.length; i++) {
    tempProduct = array[i] * array[i - 1];
    if (tempProduct > finalProduct) {
      finalProduct = tempProduct;
    }
  }
  
  return finalProduct;
}
