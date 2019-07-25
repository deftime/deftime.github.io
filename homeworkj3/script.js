pg = document.getElementById('block');

// var str = prompt('Enter word with low first letter: ', '');
//
// function ucFirst(string) {
//   var fl = string[0].toUpperCase();
//   return fl + string.substring(1);
// }
//
// var rez = ucFirst(str);
//
// pg.innerHTML = rez;

// ---------------------------------

// var str = prompt('Enter search request: ', '');
//
// function checkSpam(string) {
//   var toUpper = string.toUpperCase();
//   if (~toUpper.indexOf('XXX') || ~toUpper.indexOf('VIAGRA')) {
//     return "There are spam in request!";
//   } else {
//     return "Searching...";
//   }
// }
//
// var rez = checkSpam(str);
//
// pg.innerHTML = rez;

// ---------------------------------

// var str = prompt('Enter string: ', '');
// var len = +prompt('How to make it shorter?', '');
//
// function truncate(string, max) {
//   if (string.length > max) {
//     return string.substring(0, max) + '...';
//   }
//   return string;
// }
//
// var rez = truncate(str, len);
// pg.innerHTML = rez;

// -----------------------------------

// var price = prompt('Enter price: ', '');
// var rez = currency(price);
// pg.innerHTML = rez;
//
// function currency(string) {
//   var ln = string.length - 1;
//   if (string[0] == '$') {
//     return +string.slice(1);
//   } else if (string[ln] == '$') {
//     return +string.slice(0, ln);
//   }
//   return string;
// }

// -----------------------------------

// var goods = ['one', 'two', 'three', 'four', 'five'];
// var ls = last(goods);
// pg.innerHTML = ls;
//
// function last(mass) {
//   var len = mass.length - 1;
//   return mass[len];
// }

// ----------------------------------

// var arr = ['Jazz', 'Blues'];
//
// arr.push('Rock-n-Roll');
//
// arr[arr.length - 2] = 'Classic';
//
// alert(arr.shift());
//
// arr.unshift('Rap', 'Raggee');
//
// pg.innerHTML = arr;

// ---------------------------------

// var arr = ['Apple', 'Pinapple', 'Plum', 'Orange', 'Maracua', 'Lemon'];
// pg.innerHTML = randomMass(arr);
//
// function randomMass(mass) {
//   var max = mass.length - 1;
//   var rand = Math.round(Math.random() * max);
//   return mass[rand];
// }

// -------------------------------

// var arrCount = [];
// var fill = 0;
// var rez = 0;
//
// while (true) {
//   fill = prompt('Enter number: ', '');
//   if (!isNaN(fill) && fill !== null && fill !== "" && fill.indexOf(" ")){
//     arrCount.push(+fill);
//   }else {
//     for (var i = 0; i < arrCount.length; i++){
//       rez += arrCount[i];
//     }
//     break;
//   }
// }
//
// pg.innerHTML = rez;

// -------------------------------

// var arr = ['string', 2, 3, 5, true];
// var qu = prompt('For what element we find index?', '');
// var rez = find(arr, qu);
// pg.innerHTML = rez;
//
// function find(mass, value) {
//   if (!isNaN(value)) value = +value;
//   if (mass.indexOf(value) > -1) {
//     return 'Index of element - ' + mass.indexOf(value);
//   } else {
//     return 'Element not found!';
//   }
// }

// ------------------------------

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var from = +prompt('Enter from: ', '');
// var to = +prompt('Enter to: ', '');
// var rez = filter(arr, from, to);
// pg.innerHTML = rez;
//
// function filter(mass, a, b) {
//   var arrF = [];
//   for (var i = 0; i < mass.length; i++){
//     if (a <= mass[i] && mass[i] <= b) {
//       arrF.push(mass[i]);
//     }
//   }
//   return arrF;
// }

// --------------------------------

// var eratos = [];
// fillMass(eratos, 100); // Просто запускаем функцию, взятый массив будет заменен, так как береться ссылка.
//
// var eraZero = simple(eratos);  // Результат функции записываем в новую переменную, что бы не менять исходный массив.
//
// pg.innerHTML = eraZero;
//
// function fillMass(mass, amount) {    // Функция, заполняющая массив числами до заданного.
//   var value = 1;
//   for (var i = 0; i < amount; i++){
//     mass.push(value);
//     value++;
//   }
//   return mass;
// }
//
// function simple(mass) {
//   var p;
//   var zero = 0;
//   var ind;
//   var newMass = [];
//   for (var i = 0; i < mass.length - 1; i++){ // Копируем принятый массив, что бы не менять его.
//     newMass[i] = mass[i];
//   }
//
//   for (i = 1; i < newMass.length; i++){
//     if (newMass[i] != 0) {
//       p = newMass[i];
//       for (var j = newMass.indexOf(p); j < newMass.length; j++){ // "Выключаем" ненужные значения, превратив их в ноль.
//         zero = newMass[j] * p;
//         if ((p * p) < newMass.length) {
//           ind = newMass.indexOf(zero);
//           newMass[ind] = 0;
//         }
//       }
//     }
//   }
//
//
//   return newMass;           // Возвращаем значение копии массива
// }

// ------------------------------------

// var obj = {};
// var rez = "";
//
// obj.name = 'Vasya';
// obj.surname = 'Petrov';
// obj.name = 'Sergiy';
// delete obj.name;
//
// for (var key in obj){
//   rez += `${key}: ${obj[key]} <br>`;
// }
//
// pg.innerHTML = rez;

// ----------------------------------

// var obj = {};
// obj.name = 'Lili';
// var rez = isEmpty(obj);
// pg.innerHTML = rez;
//
// function isEmpty(ob) {
//   for (var key in ob) {
//     return 'Object NOT empty!';
//   }
//   return 'Object is empty.';
// }

// ----------------------------------

// var obj = {
//   Vasy: 100,
//   Mary: 250,
//   Mike: 345
// }
// var rez = sumObj(obj);
// pg.innerHTML = `Sum of object numbers - ${rez}`;
//
// function sumObj(ob) {
//   var sum = 0;
//   // for (var key in ob) {    // Что бы вывести не 0, а произвольный результат при пустом массиве
//     for (key in ob) {
//       sum += ob[key];
//     }
//     return sum;
//   }
//   // return 'EMPTY'; }

// -----------------------------------

// var sal = {
//   Peet: 100,
//   Mary: 450,
//   Mike: 1450,
//   Lui: 700,
//   Nina: 2300
// }
//
// var rez = highSal(sal);
// pg.innerHTML = rez;
//
// function highSal(ob) {
//   var comp = 0;
//   for (key in ob){
//     if (comp > ob[key]) {
//       continue;
//     } else {
//       comp = ob[key];
//     }
//   }
//   if (comp == 0) {
//     comp = 'None of employee!';
//   }
//   return comp;
// }

// -------------------------------------

var obj = {
  first: 20,
  second: 30,
  thithd: 40,
  fourth: 50,
  fifth: 100,
  string: 'line'
}

pg.innerHTML = double(obj);

function double(ob) {
  for (var key in ob){
    if (isNaN(ob[key])) {
      continue;
    }
    ob[key] *= 2;
  }
  return ob;
}
