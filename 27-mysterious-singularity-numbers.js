
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

function realNumbers(n) {
  // Calculate the number of integers divisible by 30 up to n
  const By30 = Math.floor(n / 30);

  // Calculate the number of integers divisible by 2, 3, or 5 up to n
  const By2 = Math.floor(n / 2);
  const By3 = Math.floor(n / 3);
  const By5 = Math.floor(n / 5);

  // Calculate the number of integers divisible by 6, 10, or 15 up to n
  const By6 = Math.floor(n / 6);
  const By10 = Math.floor(n / 10);
  const By15 = Math.floor(n / 15);

  // Calculate the number of integers divisible by 30, 3, 5, 2, 6, 10, or 15
  const totalDivisible = By30 + By2 + By3 + By5 - By6 - By10 - By15;

  // Subtract from n to get the count of numbers that are not divisible by any of these
  const numbers = n - totalDivisible;

  return numbers;
}

// ??? 
function realNumbers(n){
  return n - (Math.floor(n / 2) + Math.floor(n / 3) + Math.floor(n / 5) - Math.floor(n / 6) - Math.floor(n / 10) - Math.floor(n / 15) + Math.floor(n / 30));
}
