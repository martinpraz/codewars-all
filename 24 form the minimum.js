
function minValue(values){
  // Casting "values" to Set() eliminates all duplicates by default
  values = new Set(values);
  // In decimal system, leftmost digit is most important 
  // So to get a smallest number made of all digits in the array simply sort the array in ascending order
  // Then join sorted array into 1 number (as string)
  values = [...values].sort((a, b) => a - b).join("");
  
  // Cast resulting "String" back to "Number" and return
  return Number(values);
}
