
function maxTriSum(numbers){
  let alreadyUsed = [];
  numbers = numbers.sort((a, b) => b - a);
  let sum = 0;
  let triCount = 0;
  
  for (let i = 0; i < numbers.length && triCount < 3; i++) {
    if (alreadyUsed.includes(numbers[i])) {
      continue;
    }
    sum += numbers[i];
    alreadyUsed.push(numbers[i]);
    triCount++;
  }
  
  return sum;
}
