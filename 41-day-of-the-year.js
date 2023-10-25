function toDayOfYear(arr) {
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  arr = [...arr];
  let sum = 0;
  
  for (let i = 0; i < arr[1] - 1; i++) {
    sum += months[i];
  }
  
  function isLeap(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
  
  return (!isLeap(arr[2]) || (isLeap(arr[2]) && arr[1] < 3)) ? sum + arr[0] : sum + arr[0] + 1;
}
