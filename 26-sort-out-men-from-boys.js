
function menFromBoys(arr){
  let evenArray = [], oddArray = [];
  
  for (i = 0; i < arr.length; i++) {
    // not using a Set() b/c wanna learn to write complex conditions
    if (!evenArray.includes(arr[i]) && !oddArray.includes(arr[i])) {
      (arr[i] % 2) ? oddArray.push(arr[i]) : evenArray.push(arr[i]);
    }
    
  }
  
  evenArray.sort((a, b) => a - b);
  oddArray.sort((a, b) => b - a);
  
  return evenArray.concat(oddArray);
}
