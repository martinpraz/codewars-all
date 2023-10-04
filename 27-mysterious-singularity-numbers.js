
function realNumbers(n){
  
  // constant 8 such numbers ("% [2, 3, 5] !== 0") in any 30-number chunk (30, 60, 90 etc)
  // so floor dividing a given "n" by 30, we get the number of such chunks 
  // then multiplying said number of chunks by constant 8 (per chunk) will give number of "% [2, 3, 5] !== 0" numbers in "n - nonfloored-remainder"
  // e.g. (1234 / 30 = 41), so (41 * 8 = 328) such numbers in (41 * 30 = 1230), but 1234 - 1230 still has a remainder of "4" so..
  let multiplesOf30 = Math.floor(n / 30);
  // calculate the remainder (1234 % 30 = 4)
  let remainder = n % 30;
  let numbers = 0;
  
  // manually check how many "% [2, 3, 5] !== 0" numbers exist in a calculated remainder 
  for (let i = 0; i <= remainder; i++) {
    if (i % 5 && i % 3 && i % 2) {
      numbers++;
    }
  }
    // return number of 30-number chunks times 8 "% [2, 3, 5] !== 0" numbers per chunk + number of numbers calculated in the remainder  
    return (multiplesOf30 * 8) + numbers;
  }

// THIS TIMES OUT

// function realNumbers(n){
//   let numbers = 0;
  
//   for (let i = 1; i < n; i++) {
//     if (i % 5 && i % 3 && i % 2) {
//       numbers++;
//     }
//   }
//     return numbers;
    
//   }

// function realNumbers(n) {
//   // Calculate the number of integers divisible by 30 up to n
//   const By30 = Math.floor(n / 30);

//   // Calculate the number of integers divisible by 2, 3, or 5 up to n
//   const By2 = Math.floor(n / 2);
//   const By3 = Math.floor(n / 3);
//   const By5 = Math.floor(n / 5);

//   // Calculate the number of integers divisible by 6, 10, or 15 up to n
//   const By6 = Math.floor(n / 6);
//   const By10 = Math.floor(n / 10);
//   const By15 = Math.floor(n / 15);

//   // Calculate the number of integers divisible by 30, 3, 5, 2, 6, 10, or 15
//   const totalDivisible = By30 + By2 + By3 + By5 - By6 - By10 - By15;

//   // Subtract from n to get the count of numbers that are not divisible by any of these
//   const numbers = n - totalDivisible;

//   return numbers;
// }

// // ??? 
// function realNumbers(n){
//   return n - (Math.floor(n / 2) + Math.floor(n / 3) + Math.floor(n / 5) - Math.floor(n / 6) - Math.floor(n / 10) - Math.floor(n / 15) + Math.floor(n / 30));
// }
