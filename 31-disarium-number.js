function disariumNumber(n) {
  // if "n" is equal to the sum of the power of its digits == isDisarium
  if (n == 1) {
    return "Disarium !!";
  }
  
  // separate digits in an array: e.g. [1, 4, 5]
  let digits = n.toString().split("");
  // entire number in an array at position 0: e.g. [145]
  let wholeNum = n.toString().split();
  
  let sum = 0;
  
  for (let i = 0; i < digits.length; i++) {
    sum += digits[i] ** (i + 1);
  }
  
//   console.log(`${sum} :: ${wholeNum}`);
  
  if (sum == wholeNum) {
    return "Disarium !!";
  } else {
    return "Not !!";
  }
  
}
