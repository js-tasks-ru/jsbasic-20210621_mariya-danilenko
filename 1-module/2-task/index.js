
function isValid(name) {
  if ((name.includes (' ')) || (name.length <= 4) || (name == 0 ))
  {
    return false;
  }
  else
  {
    return true;
  }
}


//function allLetter(uname)
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
