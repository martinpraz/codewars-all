function rowWeights(array){
  let team1 = 0, team2 = 0;
  
  for (let i = 0; i < array.length; i++) {
      if (i % 2) {
        team2 += array[i];
      } else {
        team1 += array[i];
      }
  }
  
  return [team1, team2];
}
