var pg = document.getElementById('block');

// function Accumulator(start) {
//   this.value = start;
//   this.read = function () {
//     this.value += +prompt('Enter number:', '');
//   }
// }
//
// var acu = new Accumulator(2);
//
// acu.read();
// acu.read();
// acu.read();
// pg.innerHTML = `Accumulated total - ${acu.value}`;

// ---------------------------------

// function MegaCalc() {
//   var first;
//   var second;
//   var op;
//   var mass = [];
//
//    var operations = {
//     '+': function (a, b) {
//       return a + b;
//     },
//     '-': function (a, b) {
//       return a - b;
//     }
//   };
//
//   this.calc = function(string) {
//     mass = string.split(' ');
//     first = +mass[0];
//     second = +mass[2];
//     op = mass[1];
//     for (var key in operations) {
//       if (key == op) {
//         return operations[key](first, second);
//       }
//     }
//   }
//
//   this.addOper = function(a, func) {
//     operations[a] = func;
//   }
//   //   this.first = +string.substring(0, 2);    // Чтение строки через взятие
//   //   this.second = +string.slice(-2);         // отдельных символов.
//   //   if (string.indexOf('+') > -1) {          // НЕ дает гибкости в длинне
//   //     return this.first + this.second;       // числа.
//   //   } else if (string.indexOf('-') > -1) {
//   //     return this.first - this.second;
//   //   } else {
//   //     return 'Wrong operator!';
//   //   }
//   // }
// }
//
// var mc = new MegaCalc();
// var str = prompt('Enter operation. Only + and - accept!', '');
//
// pg.innerHTML = mc.calc(str);

// -----------------------------------

// function argSum() {
//   var red = [].reduce;
//   var funcRed = function(sum, current) {
//     return sum + current;
//   };
//   return red.call(arguments, funcRed);
//   // var mass = [];                              // Копирование аргуентов в
//   // for (var key in arguments) {                // новый массив и работа с ним.
//   //   mass[key] = arguments[key];
//   // }
//   // return mass.reduce(function(sum, current) {
//   //   return sum + current;
//   // })
// }
//
// pg.innerHTML = argSum(1, 2, 3, 5);

//-----------------------------------
