
// #1 
// Pushing to array then reducing (turns out not necessary). A lot of initial fumbling.
function getSum(a, b) {
  // a and b are unordered. Establish correct start/finish points (inclusive)
  let start = Math.min(a, b);
  let finish = Math.max(a, b);
  
  // Create empty array to store numbers from a -> b (inclusive)
  let numArray = [];
  
  // Populate the array by looping from start -> finish (inclusive)
  for (let i = start; i <= finish; i++) {
    numArray.push(i);
  }
  
  // Reduce the numArray to a single value and return
  return numArray.reduce((a, b) => a + b);
}

// #2
// Remove the unnecessary numArray and directly calculate the sum in a "sum" variable
function getSum(a, b) {
  // Check if a === b
  if (a === b) {
    return a; // Return either a or b if they are equal.
  }
  
  // Determine the start and finish values
  let start = Math.min(a, b);
  let finish = Math.max(a, b);

  // Calculate the sum of integers from start to finish (inclusive)
  let sum = 0;
  for (let i = start; i <= finish; i++) {
    sum += i;
  }
  
  return sum;
}

// #3 
// Combine the variable assignement for "start" and "finish" into a single loop (slightly less readable)
function getSum(a, b) {
  // Check if a === b
  if (a === b) {
    return a; // Return either a or b if they are equal.
  }

  // Calculate the sum of integers from start to finish (inclusive)
  let sum = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }
  
  return sum;
}
