
//
function spinAround(turns) {
  let sum = 0;
  
  for (const turn in turns) {
    (turns[turn] === "left") ? sum -= 90 : sum += 90;
  }
  
  return (sum > 0) ? Math.floor(sum / 360) : Math.floor(sum / -360);
}

//
function spinAround(turns) {
  let sum = 0;

  for (const turn of turns) {
    if (turn === "left") {
      sum -= 90;
    } else {
      sum += 90;
    }
  }

  return Math.floor(Math.abs(sum) / 360);
}
