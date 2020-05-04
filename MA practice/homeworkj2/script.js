var pg = document.getElementById('block');

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else if (b < a) {
//     return b;
//   } else {
//     return false;
//   }
// }
//
// var first = +prompt('Enter first number: ', '');
// var second = +prompt('Enter second number: ','');
//
// var rez = min(first, second);
//
// rez ? pg.innerHTML = `Less number - ${rez}!` : pg.innerHTML = `Numbers are same!`;

// ------------------------------------------------

// function pow(a, b) {
//   if ((a > 0) && (b > 0)) {
//     var count = a;
//     while (b > 1) {
//       count *= a;
//       b--;
//     }
//     return count;
//   } else {
//     return "Support only >1 numbers";
//   }
// }
//
// var first = +prompt('Enter first number: ', '');
// var second = +prompt('Enter second number: ','');
//
// var rez = pow(first, second);
//
// pg.innerHTML = rez;

// -------------------------------------------------

function fib(a) {
  var count = a;
  while (a > 1) {
    count = a * fib(a - 1);
    return count;
  }
  return count;
}

var first = +prompt('Enter number: ', '');

var rez = fib(first);

pg.innerHTML = `Factorial is ${rez}`;
