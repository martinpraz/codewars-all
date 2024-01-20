
//
function duplicateCount(text){
  text = text.toLowerCase().split("");
  
  let charCount = {};
  let sum = 0;
  
  for (const digit of text) {
    if (charCount[digit]) {
      charCount[digit]++;
    } else {
      charCount[digit] = 1;
    }
  }
  
  for (const [key, value] of Object.entries(charCount)) {
        if (value > 1) {
            sum++;
        }
    }
  return sum;
}
