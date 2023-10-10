
//
function extraPerfect(n){
  let digits = [];
  
  // push all the numbers between 1 and n to an array
  for (let i = 1; i <= n; i++) {
    digits.push(i);
  }
  
  // filter digits array for odd numbers only 
  return digits.filter(num => num % 2 == 1);
}
