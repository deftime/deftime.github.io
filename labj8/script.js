var pg = document.getElementById('block');

// var obj = {};
//
// function Con1() {         // Две функции-конструктора, которые создают
//   return obj;             // один и тот же объект.
// }
//
// function Con2() {
//   return obj;
// }
//
// var a = new Con1();
// var b = new Con2();

// -------------------------

// var calculator = {
//   first: 0,
//   second: 0,
//   read: function () {
//     this.first = +prompt('Enter first number: ', '');
//     this.second = +prompt('Enter second number: ', '');
//   },
//   sum: function () {
//     return this.first + this.second;
//   },
//   mul: function () {
//     return this.first * this.second;
//   }
// };
//
// calculator.read();
// pg.innerHTML = 'Total: ' + calculator.sum() + '<br>' + 'Multiply: ' + calculator.mul();

// ------------------------------

// function Calculator() {
//   this.first = 0;
//   this.second = 0;
//   this.read = function () {
//     this.first = +prompt('Enter first number:', '');
//     this.second = +prompt('Enter second number:', '');
//   }
//   this.sum = function () {
//     return this.first + this.second;
//   }
//   this.multi = function () {
//     return this.first * this.second;
//   }
// };
//
// var calc = new Calculator();
//
// calc.read();
// pg.innerHTML = `Total: ${calc.sum()} <br>Multiply: ${calc.multi()}`;

// --------------------------------

function Collector() {
  this.showElems = [];
  this.showCount = 0;
  this.Elems = function() {
    var mass = arguments[0].split(' ');
    this.showCount = mass.length;
    for (var i = 0; i < mass.length; i++) {
      this.showElems.push(mass[i]);
    }
  }
};

function N1() {
  var str = '';
  for (var i = 0; i < arguments.length; i++) {
    str += arguments[i] + ' ';
  }
  return str;
}

var b = new Collector();


b.Elems.call(b, N1(1, 'yo', true));

pg.innerHTML = `Array: ${b.showElems}<br>Count: ${b.showCount}`;
