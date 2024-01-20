
//
 function findOutlier(integers){
   let oddOut = integers.filter(x => x % 2 !== 0);
   let evenOut = integers.filter(x => x % 2 == 0);
   
   if (oddOut.length == 1) {
     return parseInt(oddOut.join(""), 10);
   } else {
     return parseInt(evenOut.join(""), 10);
   }
}

//
 function findOutlier(integers){
   let oddOut = integers.filter(x => x % 2 !== 0);
   let evenOut = integers.filter(x => x % 2 == 0);
   
   return (oddOut.length == 1) ? parseInt(oddOut.join(""), 10) : parseInt(evenOut.join(""), 10);
}
