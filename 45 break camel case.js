
// apparently this modifies the array while iterating over it, which causes a timeout (SOLVED!)
function solution(s) {
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i].toUpperCase()) {
      arr.splice(i, 0, " ");
      // need this line to skip the next character after inserting the space
      // otherwise tne next i will always be upperCase (because you're splicing a space right before it), causing infite loop and a timeout
      i++; 
    }
  }
  
  return arr.join("");
}


