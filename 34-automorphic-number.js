function automorphic(n){
  let nSquared = n ** 2;
  let endingStart = nSquared.toString().length - n.toString().length;
  
  if (nSquared.toString().slice(endingStart) == n) {
    return "Automorphic";
  } else {
    return "Not!!";
  }
}
