

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
