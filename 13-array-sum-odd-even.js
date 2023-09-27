function oddOrEven(array) {
  if (array.length === 0) {
    return "even";
  } else {
    let sum = array.reduce((total, currentVal) => total  + currentVal);
    return sum % 2 === 0 ? "even" : "odd";
  }
  
}
