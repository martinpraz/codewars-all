
//
function duplicateEncode(word){
  const text = word.toLowerCase().split("");
  
  let charCount = {};
  let result = "";
  
  for (const digit of text) {
    if (charCount[digit]) {
      charCount[digit]++;
    } else {
      charCount[digit] = 1;
    }
  }
  
  for (const digit of text) {
    const value = charCount[digit];

    if (value === 1) {
      result += '(';
    } else if (value > 1) {
      result += ')';
    }
  }
  
  return result;
}

//
function duplicateEncode(word) {
  const text = word.toLowerCase().split("");

  const charCount = text.reduce((acc, digit) => {
    acc[digit] = (acc[digit] || 0) + 1;
    return acc;
  }, {});

  const result = text.map(digit => (charCount[digit] === 1 ? '(' : ')')).join('');

  return result;
}

