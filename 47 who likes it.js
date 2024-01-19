
//
function likes(names) {
  let len = names.length;
  
  switch (true) {
      case len === 0:
        return `no one likes this`;
      case len === 1:
        return `${names[0]} likes this`;
      case len === 2: 
        return `${names[0]} and ${names[1]} like this`;
      case len === 3: 
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      case len > 3:
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
      default:
        // Default case (unnecessary in this context, but kept for completeness)
        break;
  }
}

//
function likes(names) {
  
  switch (names.length) {
      case 0:
        return `no one likes this`;
      case 1:
        return `${names[0]} likes this`;
      case 2: 
        return `${names[0]} and ${names[1]} like this`;
      case 3: 
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      default:
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
