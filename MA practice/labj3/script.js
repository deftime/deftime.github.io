// var ball = +prompt("Enter number:", "");
// var rez;
//
//
// if ((ball > 0) && (ball <= 59)) {
//   rez = "FX = 0-59";
// } else if ((ball >= 60) && (ball <= 64)) {
//   rez = "E = 60-64";
// } else if ((ball >= 65) && (ball <= 74)) {
//   rez = "D = 65-74";
// } else if ((ball >= 75) && (ball <= 84)) {
//   rez = "C = 75-84";
// } else if ((ball >= 85) && (ball <= 94)) {
//   rez = "B = 85-94";
// } else if ((ball >= 95) && (ball <= 100)) {
//   rez = "A = 100-94";
// } else {
//   rez = "Wrong number";
// }

// ---------------------------

// var pg = document.getElementById('block');
// var qu = confirm("Yes or No?");
//
// (qu) ? pg.innerHTML = "Yes" : pg.innerHTML = "No";
// (qu) ? pg.style = "color: green" : pg.style = "color: red";

// -----------------------------

// var pg = document.getElementById('block');
// var qu = +prompt("Enter number from 1 to 10:", "");
// var rez;
//
// switch (qu) {
//   case 1:
//     rez = "Minimum!";
//     break;
//   case 10:
//     rez = "Maximum";
//     pg.style = "background: red"
//     break;
//   case 5:
//     rez = "Middle...";
//     break;
//   default:
//     rez = "Another.";
//     break;
// }
//
// pg.innerHTML = rez;

// --------------------------------

// var pg = document.getElementById('block');
// var rez;
//
// var qu = +prompt("What number from 1 to 10?", "");
//
// while (qu != 7) {
//   qu = +prompt("Nope, another try?", "");
// }
//
// pg.innerHTML = "Right!";
// pg.style = "background: green"

// ------------------------------------

var pg = document.getElementById('body');
var rez = "";
var cnt;

for (var i = 1; i < 10 ; i++) {
  for (var j = 1; j < 10; j++) {
    cnt = i * j;
    rez += i + " * " + j + " = " + cnt + "<br>";
  }
  rez += "<br>";
}

pg.innerHTML = rez;
