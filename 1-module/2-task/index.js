
function isValid(name) {
  if (name == null || name == '' || name.includes(' ') || name.length < 4) {
    return false;
  }
  return true;
}


//if (condition) {
//     statement_1;
// } else {
//     statement_2;
// }
// {
//   var letters = /^[A-Za-z]+$/;
//   if(uname.value.match(letters))
//   {
//     return true;
//   }
//   else
//   {
//     alert('Username must have alphabetcharactersonly');
//     uname.focus();
//     return false;
//   }
// }

// если имя корректное, то true
 //   × если содержит пробелы, то false
 //   × если меньше 4 символов то false
//
