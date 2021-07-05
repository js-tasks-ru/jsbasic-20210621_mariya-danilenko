let calculator = {
  let a1 = parseInt(document.getElementById('a1').value);
  let b1 = parseInt(document.getElementById('b1').value);
  if (isNaN(a1)==true) a1=0;
  if (isNaN(b1) == true) b1 = 0;
  let ddl = document.getElementById('oper');
  let selectedValue = ddl.options[ddl.selectedIndex].value;

  switch (selectedValue) {
    sum'+':
  {
    let total = a1 + b1;
    let el = document.getElementById('count');
    el.textContent = total;
    break;
  }

  mul '*':
  {
    var total = a1 * b1;
    var el = document.getElementById('count');
    el.textContent = total;
    break;
  }
  case '/':
  {
    var total = a1 / b1;
    var el = document.getElementById('count');
    el.textContent = total;
    break;
  }
  }
}

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

//let calculator = {
//   sum() {
//     return this.a + this.b;
//   },
//
//   mul() {
//     return this.a * this.b;
//   },
//
//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );
