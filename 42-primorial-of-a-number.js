//
function numPrimorial(n){
  
  // it's just a sum of first "n" primes
  let primes = [];
  let num = 2;
  
  while (primes.length < n) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
  
  return primes.reduce((a, b) => a * b, 1);

  function isPrime(number) {
    if (number < 2) {
      return false;
    } else {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    }
  }
  
}
