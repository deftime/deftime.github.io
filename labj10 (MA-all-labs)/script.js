var pg = document.getElementById('block');

// var num1 = +prompt('Enter first number:', '');
// var num2 = +prompt('Enter second number:', '');
// var oper = prompt('Enter symbol of opertion:', '');
//
// function calc(a, b, op) {
//   if (isNaN(a) || isNaN(b)) {
//     return 'Please enter only numbers!';
//   }
//   switch (op) {
//     case '+':
//       return a + b;
//       break;
//     case '-':
//       return a - b;
//       break;
//     case '*':
//       return a * b;
//       break;
//     case '/':
//       return a / b;
//       break;
//     default:
//       return 'Wrong operation! Accept only +, -, *, /';
//       break;
//   }
// }
//
// pg.innerHTML = calc(num1, num2, oper);

// -------------------------------------


// while (isNaN(ball)) {
// var ball = +prompt('Please, enter number from 0 to 100', '');
// };
//
// function checkBalls(a) {
//   if (a >= 0 && a <= 59) {
//     return 'Number in 0 - 59';
//   } else if (a >= 60 && a <= 64) {
//     return 'Number in 60 - 64';
//   } else if (a >= 65 && a <= 74) {
//     return 'Number in 65 - 74';
//   } else if (a >= 75 && a <= 84) {
//     return 'Number in 75 - 84';
//   } else if (a >= 85 && a <= 94) {
//     return 'Number in 85 - 94';
//   } else if (a >= 95 && a <= 100) {
//     return 'Number in 95 - 100';
//   } else {
//     return 'Out of range!';
//   }
// }
//
// pg.innerHTML = checkBalls(ball);

// ------------------------------------

// function checkPass(name) {
//   alert(`Hi, ${name}! Let's check your results.`);
//   let subjects = new Array(5);
//   for (let i = 0, j = 1; i < subjects.length; i++, j++) {
//     let num = +prompt(`Enter mark of ${j} subject:`, '');
//     if (isNaN(num) || num < 0 || num > 60) {
//       alert(`Wrong mark, plz enter from 0 to 60.`);
//       i--;
//       j--;
//       continue;
//     }
//     subjects[i] = num;
//   }
//   let total = 0;
//   for (let i = 0; i < subjects.lenght; i++) {
//     total += subjects[i];
//   }
//   if (total < 100) {
//     return `${name}, unfortunately, your results is poor, need re-pass...`;
//   } else {
//     return `Congratulation, ${name}! You have passed all!`;
//   }
// }
//
// pg.innerHTML = checkPass('Johnny');

// --------------------------------------

// var cars = [];
//
// function newCar(mark, model, eng) {
//   this.mark = mark;
//   this.model = model;
//   this.engine = eng;
//   this.changeCar = function() {
//     this.mark = prompt('Enter car brand:', '');
//     this.model = prompt('Enter car model:', '');
//     this.engine = +prompt('Enter car engine:', '');
//   }
// };
//
// cars[0] = new newCar('Ford', 'Focus', 1.2);
// cars[1] = new newCar('Opel', 'Insignia', 2.3);
// cars[2] = new newCar('VW', 'GolfGTI', 2.0);
//
// var rez = '';
// for (let i = 0; i < cars.length; i++) {
//   for (let key in cars[i]) {
//     if (isFinite(cars[i][key]) && cars[i][key] >= 2.0) {
//       rez += `Brand: ${cars[i].mark}, Model: ${cars[i].model}, Engine: ${cars[i].engine}<br>`;
//     }
//   }
// }
//
// pg.innerHTML = rez;

// -----------------------------

function showArgs() {
  let rez = `Total - ${arguments.length} arguments<br>`;
  for (let i = 0; i < arguments.length; i++) {
    rez += `[${i}] = ${arguments[i]}<br>`;
  }
  return rez;
}

pg.innerHTML = showArgs('yo', 2, true, 'men');
