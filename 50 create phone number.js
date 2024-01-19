
//
function createPhoneNumber(numbers){
  let areaCode = numbers.slice(0, 3).join("");
  let centralOffice = numbers.slice(3, 6).join("");
  let lineNumber = numbers.slice(6).join("");
  
  return `(${areaCode}) ${centralOffice}-${lineNumber}`
}
