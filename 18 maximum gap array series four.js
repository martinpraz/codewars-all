function maxGap (numbers){
  let maxGap = 0;
  numbers.sort((a, b) => b - a);

  for (let i = 1; i < numbers.length; i++) {
    let currentGap = Math.abs(numbers[i] - numbers[i - 1]);
    
    if (currentGap > maxGap) {
      maxGap = currentGap;
    }
      
  }
  return maxGap;
}
