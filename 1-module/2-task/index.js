
function isValid(name) {
  if (name == null || name == '' || name.includes(' ') || name.length < 4) {
    return false;
  }
  return true;
}



