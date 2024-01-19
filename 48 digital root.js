
//
function digitalRoot(n) {
  
  while (n >= 10) {
    let arr = Array.from(String(n), Number); // Convert n to an array of digits
    n = arr.reduce((a, b) => a + b, 0);     // Calculate the sum of digits and update n
  }
  
  return n;
}
