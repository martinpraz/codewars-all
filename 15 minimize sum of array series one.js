
//
function minSum(arr) {
  arr.sort((a, b) => b - a);
  let minSum = 0;
  
  // Don't iterate through the whole array, only until both ends meet in the middle
  // Past the middle, you'd be multiplying the items for the second time
  for (let i = 0, j = arr.length - 1; i < (arr.length / 2); i++, j--) {
    console.log(minSum);
    minSum += arr[i] * arr[j];
  }
  
  return minSum;
}

// 
function minSum(arr) {
  let minSum = 0;

  while (arr.length > 0) {
    const minValue = Math.min(...arr); // Find the minimum value
    const maxValue = Math.max(...arr); // Find the maximum value

    minSum += minValue * maxValue; // Add the product to the sum

    // Remove the minimum and maximum values from the array
    arr.splice(arr.indexOf(minValue), 1);
    arr.splice(arr.indexOf(maxValue), 1);
  }

  return minSum;
}
