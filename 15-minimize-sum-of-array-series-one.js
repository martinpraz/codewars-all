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
