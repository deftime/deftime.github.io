var pg = document.getElementById('block');

// var sum = 0.1+0.2;
// var n = sum.toFixed(1);
//
// pg.innerHTML = n;

// ------------------------

// var str = "Company \"Agro\"";
//
// pg.innerHTML = str;

// ------------------------

// var str = "April";
// var char1 = str[1];
// var char2 = str[2];
//
// pg.innerHTML = `${char1}, ${char2}`;

// -----------------------=

// var str = "April";
// var line = "";
//
// for (var i = 0; i < str.length; i++) {
//   line += str[i] + "<br>";
// }
//
// pg.innerHTML = line;

// -----------------------

// var str = "April";
// var line = "";
//
// for (var i = (str.length - 1); i >= 0; i--) {
//   line += str[i] + "<br>";
// }
//
// pg.innerHTML = line;

// -----------------------

// var str = "Serega";
// var line = "";
//
// for (var i = 0; i < str.length; i++) {
//   if (str.indexOf("e") && str[i] == "e") {
//     line += i + ", ";
//   } else {
//     continue;
//   }
// }
//
// pg.innerHTML = line;

// ------------------------

// var str = "так что аргументы меняются местами";
// var line;
// var rez;
//
// if (str.indexOf("аргументы")) {
//   line = str.indexOf("аргументы");
// }
//
// rez = str.substr(line+2, 5);
//
//
// pg.innerHTML = rez;

// ------------------------

// var str = "Masha, Petya, Mary, Vlad";
//
// function toMass(string, sep) {
//   var rez;
//   string.split(sep);
//   if (string.indexOf("Petya") > -1) {
//     rez = "Petya is here!"
//   } else {
//     rez = "None";
//   }
//   return rez;
//
// }
//
// pg.innerHTML = toMass(str, ", ");

// -------------------------

var str = "Mary, Mike, Paul, Dave";

function rev(string, sep) {
  return string.split(sep).reverse().join(sep);
}

pg.innerHTML = rev(str, ", ");
