function strong(n) {
  // if "n" is equal to the sum of the factorial of its digits == isStronk
  if (n == 1) return "STRONG!!!!";
  
  // separate digits in an array: e.g. [1, 4, 5]
  let digits = n.toString().split("");
  // entire number in an array at position 0: e.g. [145]
  let wholeNum = n.toString().split();
  
  let sum = 0;
  
  for (let i = 0; i < digits.length; i++) {
    sum += factorializer(digits[i]);
  }
  
  if (sum == wholeNum) {
    return "STRONG!!!!";
  } else {
    return "Not Strong !!";
  }
  
}

function factorializer(num) {
  let factorial = 1;
  
  while (num > 1) {
    factorial *= num;
    num--;
  }
  
  return factorial;
}
