
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

//
/**
 * Finds the minimum number of additions required to make the sum of an array of numbers prime.
 *
 * @param {number[]} numbers - An array of numbers to be summed.
 * @returns {number} The minimum number of additions to make the sum prime.
 */
function minimumNumber(numbers) {
  // Calculate the initial sum
  let base = numbers.reduce((a, b) => a + b, 0);

  // If the initial sum is prime, no additions are needed
  if (isPrime(base)) {
    return 0;
  }

  // Find the minimum number of additions required to make the sum prime
  let minNum = 0;
  while (!isPrime(base)) {
    minNum++;
    base++;
  }

  return minNum;

  /**
   * Checks if a number is prime.
   *
   * @param {number} number - The number to be checked for primality.
   * @returns {boolean} True if the number is prime, false otherwise.
   */
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
