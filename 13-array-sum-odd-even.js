function oddOrEven(array) {
  if (array.length === 0) {
    return "even";
  } else {
    let sum = array.reduce((total, currentVal) => total  + currentVal);
    return sum % 2 === 0 ? "even" : "odd";
  }
  
}

function oddOrEven(arr) {
  return arr.reduce((total, currentVal) => total + currentVal, 0) % 2 ? 'odd' : 'even';
}

function oddOrEven(arr, kwargs = {}) {
  // Add default value for "initialVal" variable, so that it can be easily passed into the fucntion if need be
  const {initialVal = 0} = kwargs;

  return arr.reduce((total, currentVal) => total + currentVal, initialVal) % 2 ? 'odd' : 'even';
}
