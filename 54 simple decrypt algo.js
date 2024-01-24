
//
function decrypt(encryption) {
  
  // Step 1: Sort and filter out non-alphabet characters
  const text = encryption
  .split("")
  .sort()
  .filter(x => x.match(/[a-zA-Z]/));
  
  let charCount = {};
  let result = "";
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  
  // Step 2: Count occurrences of each character 
  for (const digit of text) {
    if (charCount[digit]) {
      charCount[digit]++;
    } else {
      charCount[digit] = 1;
    }
  }
  
  // Step 3: Build the result string based on the alphabet
  for (let i = 0; i < alpha.length; i++) {
    // Append the count of each letter (or 0 if not found) to the result string
    result += charCount[alpha[i]] || 0; 
  }
  
  return result;
}

//
function decrypt(encryption) {
  const cleanAndSort = (text) =>
    text
      .split("")
      .filter((char) => char.match(/[a-zA-Z]/))
      .sort();

  const countOccurrences = (text) =>
    text.reduce((charCount, digit) => {
      charCount[digit] = (charCount[digit] || 0) + 1;
      return charCount;
    }, {});

  const buildResultString = (alpha, charCount) =>
    alpha.map((letter) => charCount[letter] || 0).join("");

  const alpha = 'abcdefghijklmnopqrstuvwxyz';

  const sortedText = cleanAndSort(encryption);
  const charCount = countOccurrences(sortedText);
  const result = buildResultString(alpha.split(""), charCount);

  return result;
}


