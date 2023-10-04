
function balancedNum(number) {
  let numArray = number.toString().split('').map(Number);
  
  if (numArray.length == 1) {
    return "Balanced";
  } else if (numArray.length == 2) {
    // 13 is a "Balanced" number because for even numbers we don't consider the middle numbers (so 0 is equal to 0)
    return numArray[0] !== numArray[1] ? "Balanced" : "Not Balanced";
  }
  
  let middleNum;
  let left = 0;
  let right = 0;
  
  
  if (numArray.length % 2) {
    middleNum = Math.floor(numArray.length / 2);
    left = numArray.slice(0, middleNum).reduce((a, b) => a + b);
    right = numArray.slice(middleNum + 1).reduce((a, b) => a + b, 0);
    console.log(`${left} :: ${right}`)
  } else {
    middleNum = Math.floor(numArray.length / 2);
    numArray.splice(middleNum, 1);
    middleNum = Math.floor(numArray.length / 2);
    left = numArray.slice(0, middleNum).reduce((a, b) => a + b);
    right = numArray.slice(middleNum + 1).reduce((a, b) => a + b, 0);
  }
  
  return left == right ? "Balanced" : "Not Balanced";
  
}
