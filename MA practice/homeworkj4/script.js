var pg = document.getElementById('block');

// var obj = {
//   classes: 'open menu'
// };
//
// addClass(obj, 'menu');
//
// pg.innerHTML = obj;
//
// function addClass(ob, cls) {
//   if (ob.classes.indexOf(cls) > -1) {
//     return;
//   }
//   return ob.classes = ob.classes + ' ' + cls;
// }

// ------------------------

// var str = 'my-long-width-top-left';
//
// var camel = toCamel(str);
//
// pg.innerHTML = camel;
//
// function toCamel(string) {
//   var arr = string.split('-');
//   var sym;
//   for (var i = 1; i < arr.length; i++){
//     sym = arr[i].charAt(0).toUpperCase();
//     arr[i] = sym + arr[i].slice(1);
//   }
//   return arr.join('');
// }

// --------------------------

// var obj = {
//   classes: 'menu open menu menu menu bot menu',
// };
//
// removeClass(obj, 'menu');
//
// var rez = '';
// for (var key in obj) {
//   rez += key + ': ' + obj[key] + '<br>';
// }
// pg.innerHTML = rez;
//
// function removeClass(ob, cls) {
//   var arr = ob.classes.split(' ');
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == cls) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
//   return ob.classes = arr.join(' ');
// }

// -------------------------
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// range(arr, 5, 8);
//
// pg.innerHTML = arr;
//
// function range(mass, a, b) {
//   for (i = 0; i < mass.length; i++) {
//     if (mass[i] < a || mass[i] > b) {
//       mass.splice(i, 1)
//       i--;
//     }
//   }
// }

// ---------------------------

// var arr = [3, 5, 7, 8, 9, 1, 2, 4, 6, 10];
//
// arr.sort(revSort);
//
// pg.innerHTML = arr;
//
// function revSort(a, b) {
//   return b - a;
// }

// --------------------------

// var arr = ['html', 'css', 'javascript'];
// var arrSort = sortMass(arr);
//
// pg.innerHTML = arrSort;
//
// function sortMass(mass) {
//   var sorted = mass.slice().sort();
//   return sorted;
// }

// --------------------------

// var arr = [1, 2, 3, 4, 5];
// arr.sort(random);
//
// pg.innerHTML = arr;
//
// function random(a, b) {
//   return Math.random() - 0.5;
// }

// -------------------------

// var vasek = {
//   name: 'Vasiliy',
//   age: 20
// };
//
// var nikitos = {
//   name: 'Nikita',
//   age: 28
// };
//
// var lili = {
//   name: 'Liliya',
//   age: 16
// };
//
// var arr = [vasek, nikitos, lili];
//
// arr.sort(byAge);
//
// pg.innerHTML = arr;
//
// function byAge(a, b) {
//   return a.age - b.age;
// }

// ----------DATATIME------------------

// var date = new Date(2012, 1, 20, 3, 12);
//
// pg.innerHTML = date;

// -----------------------------------

// var date = new Date(2019, 7, 25);
//
// pg.innerHTML = wordDay(date);
//
// function wordDay(dat) {
//   switch (dat.getDay()) {
//     case 0:
//       return 'Sunday';
//       break;
//     case 1:
//       return 'Monday';
//       break;
//     case 2:
//       return 'Tuesday';
//       break;
//     case 3:
//       return 'Wednesday';
//       break;
//     case 4:
//       return 'Thursday';
//       break;
//     case 5:
//       return 'Friday';
//       break;
//     case 6:
//       return 'Saturday';
//       break;
//     default:
//       return 'NO date';
//       break;
//   }
// }

// -------------------------------
// var date = new Date(2019, 7, 30);
//
// pg.innerHTML = localeDay(date);
//
// function localeDay(dat) {
//   switch (dat.getDay()) {
//     case 0:
//       return 7;
//       break;
//     case 1:
//       return 1;
//       break;
//     case 2:
//       return 2;
//       break;
//     case 3:
//       return 3;
//       break;
//     case 4:
//       return 4;
//       break;
//     case 5:
//       return 5;
//       break;
//     case 6:
//       return 6;
//       break;
//     default:
//       return 'NO date';
//       break;
//   }
// }

// -----------------------------

// var date = new Date(2019, 7, 25);
//
// var dateBack = back(date, 10);
//
// pg.innerHTML = dateBack;
//
// function back(dat, days) {
//   var backdate = new Date(dat);  // Копирование даты через создание нового объекта и запись в него данных из принимаемого функцией.
//   backdate.setDate(backdate.getDate() - days);
//   return backdate;
// }

// -------------------------------

// var ye = +prompt('Enter year:', '');
// var mn = +prompt('Enter month:', '');
//
// var rez = lastDay(ye, mn);
//
// pg.innerHTML = rez;
//
// function lastDay(year, month) {
//   var date = new Date(year, month+1, 0);
//   return date.getDate();
// }

// --------------------------------

// pg.innerHTML = getSecond();
//
// function getSecond() {
//   var date = new Date();
//   date.setHours(0, 0, 0, 0);
//   return Math.floor((new Date() - date) / 1000);
// }

// ---------------------------------

// pg.innerHTML = toTomorrow();
//
// function toTomorrow() {
//   var date = new Date();
//   date.setDate(date.getDate() + 1);
//   date.setHours(0, 0, 0, 0);
//   return Math.floor((date - new Date()) / 1000);
// }

// ---------------------------------

var date = new Date(2019, 3, 25);
var format = formDate(date);

pg.innerHTML = format;

function formDate(dat) {
  return `${dat.getDate()}.0${dat.getMonth()+1}.${dat.getFullYear()%100}`;
}
