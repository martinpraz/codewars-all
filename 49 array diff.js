
//
function arrayDiff(a, b) {
  
  for (let i = 0; i < b.length; i++) {
    while (a.indexOf(b[i]) !== -1) {
      // splice(start, deleteCount)
      a.splice(a.indexOf(b[i]), 1);
      
    }
  }
  
  return a;
}

//
function arrayDiff(a, b) {
  return a.filter(item => !b.includes(item));
}
