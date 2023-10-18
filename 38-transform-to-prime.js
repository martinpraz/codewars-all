
function minimumNumber(numbers){
  let base = numbers.reduce((a, b) => a + b, 0);
  
  // check if base already Prime, return 0 if so
  // if base not Prime, add 1 to base and recheck, keep adding to counter and rechecking until base is Prime, return counter 
  
  let minNum = 0;
  if (isPrime(base)) {
    return 0;
  }
  
  while (!isPrime(base)) {
    minNum++;
    base++;
  }

  // checks if passed argument is a prime number
  function isPrime(number) {
    if (number < 2) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;  // Move this line outside of the loop
    }
}
  return minNum;
}
