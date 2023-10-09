
function jumpingNumber(n){
  n = n.toString();
  
  if (n.length == 1) {
    return "Jumping!!";
  }
  
  for (let i = 1; i < n.length; i++) {
    if (Math.abs(Number(n[i]) - Number(n[i - 1])) !== 1) {
      return "Not!!";
    } else {
      return "Jumping!!";
    }
  }
}
