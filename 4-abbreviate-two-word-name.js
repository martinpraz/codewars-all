function abbrevName(name){
  let space = name.indexOf(" ");
  let initials = `${name.slice(0, 1)}.${name.slice(space + 1, space + 2)}`;
  return initials.toUpperCase();
}
