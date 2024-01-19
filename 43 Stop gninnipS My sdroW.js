
function spinWords(string){
  const original = string.split(' ');
  
  for (let i = 0; i < original.length; i++) {
    if (original[i].length >= 5) {
      original[i] = original[i].split('').reverse().join('');
    }
  }
  
  return original.join(' ');
}
