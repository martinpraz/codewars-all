
function pendulum(values) {
  // sort array ascending
  // iterate over values for length of original array
  // push()/unshift() items alternately into new array of the same length 
  // you don't need "center point"; putting consecutive items to the right/left of the previous item will "create" a center-point by itself
  
  let pendulumArray = [];
  
  values.sort((a, b) => a - b);
  for (let i = 0; i < values.length; i++) {
    if (i % 2) {
      pendulumArray.push(values[i]);
    } else {
      pendulumArray.unshift(values[i]);
    }
    
  }
  
  return pendulumArray;
  
  }

