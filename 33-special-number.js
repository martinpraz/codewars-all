function specialNumber(n){
  let specialNums = [0, 1, 2, 3, 4, 5];
  n = n.toString().split("");

  for (let i = 0; i < n.length; i++) {
    if (!specialNums.includes(Number(n[i]))) { // negate this
      return "NOT!!";
    }
  }
  return "Special!!";
}
