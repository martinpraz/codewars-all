
//
function tidyNumber(n){
  n = n.toString();
  let isIncreasing = true;
  
  for (let i = 0; i < n.length; i++) {
    if (n[i + 1] < n[i]) {
      isIncreasing = false;
    }
  }
  return isIncreasing;
}

//
function tidyNumber(n){
  // spreads the individual characters into an array
  // converts integer "n" to string by concatenating it to an empty string
  return [...n+=""].sort().join``==n
  
  /*
  "==n" checks if the sorted and joined string is equal to the original
  representation of the number "n". In essence if the digits of "n" were 
  in ascending order without any rearrangement or repetition. 
  If yes, it returns true, else "false."
  */
}
