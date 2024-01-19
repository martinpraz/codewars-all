
//
var countBits = function(n) {
  let bitArray = n.toString(2).split("");
  let counter = bitArray.filter(x => x == 1);
  let numOfOnes = counter.length;
  
  return numOfOnes;
};
