function arrayLeaders(numbers){
  let leaders = [];
  
  for (let i = 0; i < numbers.length; i++) {
    // Create shallow copy of "numbers" using spread operator to avoid mutating the original array
    let sliceArray = [...numbers.slice(i + 1)];
    let sum = sliceArray.reduce((total, currentVal) => total + currentVal, 0);
    
    if (numbers[i] > sum) {
      leaders.push(numbers[i]);
    }
  }
  
  return leaders;
}
