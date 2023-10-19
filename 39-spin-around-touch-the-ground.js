
//
function spinAround(turns) {
  let sum = 0;
  
  for (const turn in turns) {
    (turns[turn] === "left") ? sum -= 90 : sum += 90;
  }
  
  return (sum > 0) ? Math.floor(sum / 360) : Math.floor(sum / -360);
}
