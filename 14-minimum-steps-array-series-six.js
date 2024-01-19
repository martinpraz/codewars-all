function minimumSteps(numbers, value){
  debugger;
  let howMany = 0;
  let flexArray = numbers.sort((a, b) => a - b);
  let total = 0;
  
  while (flexArray.length > 0) {
    total = flexArray[0] + flexArray[1];
    
    flexArray.shift();
    flexArray.shift();
    flexArray.push(total);
    flexArray = numbers.sort((a, b) => a - b);
    howMany++;
  }
  return howMany;
}

// Forget the array, forget the pushing and splicing, just iterate normally and check the "sum >= value" inside the for loop. So elegant and simple
function minimumSteps(numbers, value) {
  numbers.sort((a, b) => a - b); // Sort the input array in ascending order
  let numberOfSteps = 0;
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];

    if (sum >= value) {
      return numberOfSteps;
    }
    numberOfSteps++;
  }
  
}
