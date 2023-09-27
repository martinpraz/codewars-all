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


