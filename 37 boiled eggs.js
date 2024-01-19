
//
function cookingTime(eggs) {
  if (eggs == 0) {
    return 0;
  } else if (eggs <= 8) {
    return 5;
  } else {
    return (Math.ceil(eggs / 8)) * 5;
  }
}

//
function cookingTime(eggs) {
  return Math.ceil(eggs / 8) * 5;
}
