var pg = document.getElementById('block');

// var mass = ['Katya', 'How are you', 'Lets go out'];
//
// pg.innerHTML = mass[0] + " " + mass[1] + " " + mass[2];

// ----------------------------

// var mass = [2, 7, 10, 11];
// var rez;
//
// if (mass.indexOf(7) != -1) {
//   rez = "7 is here!";
// } else {
//   rez = "nope of 7";
// }
//
// pg.innerHTML = rez;

// -----------------------------

// var obj = {
//   name: "Vova",
//   sur: "GB",
//   phone: 0671112233,
//   car: true,
//   markers: [1, 2, 3, 4, 5]
// };
//
// var rez = "";
// for (var key in obj){
//   rez += "Key: " + key + " Val: " + obj[key] + "<br>";
// }
//
// pg.innerHTML = rez;

// -----------------------------

// var rez = "";
//
// var obj1 = {
//   name: "Vova",
//   nick: "Deff",
//   phone: 671112233,
//   car: true,
//   markers: [1, 2, 3, 4, 5]
// };
//
// var obj2 = {
//   name: "Vova",
//   nick: "Time",
//   phone: 671112233,
//   car: false,
//   markers: [1, 2, 3, 4, 5]
// };
//
// for (var key in obj1) {
//   if (obj1[key] == obj2[key]) {
//     rez += "Same values is :" + key + " " + obj1[key] + "<br>";
//   }
// }
//
// for (var key in obj1["markers"]) {
//   if (obj1[key] == obj2[key]) {
//     rez += "Same arrays is :" + key + " " + obj1[key] + "<br>";
//   }
// }
//
// pg.innerHTML = rez;

// --------------------------------

// function plus(a, b) {
//   return a+b;
// }
//
// function minus(a, b) {
//   return a-b;
// }
//
// function divide(a, b) {
//   return a/b;
// }
//
// function multi(a, b) {
//   return a*b;
// }

// ----------------------------

// function aggr(a, b) {
//   var sum = 0;
//   while (a <= b) {
//     sum += a;
//     a++;
//   }
//   return sum;
// }
//
// var rez = aggr(25, 30);
//
// pg.innerHTML = rez;

// ------------------------------

// function aggr(a, b) {
//   var sum = 0;
//   for (;a <= b; a++) {
//     sum += a;
//   }
//   return sum;
// }
//
// var rez = aggr(5, 30);
//
// pg.innerHTML = rez;

// -----------------------------



function aggr(a, b) {
  var sum = 0;
  if (a <= b) {
    sum = b + aggr(a, b-1);
    return sum;
  } else {
    return sum;
  }
}

var first = +prompt('Enter first number: ', '');
var second = +prompt('Enter second number: ','');

var rez = aggr(first, second);

pg.innerHTML = rez;
