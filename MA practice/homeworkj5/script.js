var pg = document.getElementById('block');

// function sum(a) {
//   a = a;
//   function inner(b) {
//     return a + b;
//   }
//   return inner;
// }
//
// pg.innerHTML = sum(5)(3);

// ---------------------------

// function makeBuffer() {
//   var baf = [];
//   var i = 0;
//   function buffer(a) {
//     if (!a) {
//       return baf;
//     }
//     a = String(a);
//     baf[i] = a;
//     i++;
//   }
//   buffer.clear = function () { // Второе задание -
//     baf.length = 0;            // создаем метод для очистки.
//   }
//   return buffer;
// }
//
// var buff = makeBuffer();

// --------------------------

// function byField(prop) {                // Функция для сортировки метода sort(),
//   var a, b;                             // принимающее значение свойства обекта,
//   return function() {                   // по которому идет сортировка
//     return a[prop] > b[prop] ? 1 : -1;
//   }
// }

// ----------------------------

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// function filter(mass, func) {
//   var filtered = [];
//   for (var i = 0, j = 0; i < mass.length; i++) {
//     if (func(mass[i])) {
//       filtered[j] = mass[i];
//       j++;
//     }
//   }
//   return filtered;
// };
//
// function between(a, b) {
//   function inner(x) {
//     return (x >= a && x <= b);
//   }
//   return inner;
// };
//
// function array(...arr) {
//   function inner(x) {
//     return arr.indexOf(x) != -1;
//   }
//   return inner;
// }
//
// pg.innerHTML = filter(arr, array(2, 4, 6));

// -------------------------------------

function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {
    shooters.push(function() {
      var k = i;
      alert( k );
      k = 0;
    });
  }

  return shooters;
}

var army = makeArmy();

army[0]();
army[5]();
