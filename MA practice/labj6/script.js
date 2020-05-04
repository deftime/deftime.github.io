var pg = document.getElementById('block');

// var arr = ['I', 'learn', 'JavaScript'];
//
// arr.splice(0, 1, 'We');
// arr.pop();
// arr.splice(1, 1, 'want', 'learning', 'JavaScript');
//
// pg.innerHTML = arr;

// ----------------------------
// var arr = ['Why', 'need', 'to learn', 'JavaScript'];
//
// var arr2 = arr.slice();
//
// arr2.splice(1, 1, 'dont need');
// arr2.sort(compare);
//
// pg.innerHTML = arr2;
//
// function compare(a, b) {
//   if (a > b) return 1;
//   if (a < b) return -1;
// }

// -----------------------------

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
//
// var arr3 = arr1.concat(arr2);
//
// pg.innerHTML = arr3;

// ----------------------------

// var fruits = ['Apple', 'Orange', 'Pear'];
// var ok;
//
// fruits.forEach(findOrange);
// pg.innerHTML = ok;
//
// function findOrange(item, i, arr) {
//   if (item == 'Orange' || ok == 'There is Orange here') {
//     ok = 'There is Orange here';
//   } else {
//     ok  = 'No Orange!';
//   }
// }

// ----------------------------

// var arr = [0, 33, 1020, 1000000, 35, 78, 2300, 7500, 325, 'bag', 'glass', 'bear'];
// var num = arr.filter(bignum);
// var str = arr.filter(allstring);
//
// function bignum(name) {
//   return (name > 200 && name < 5000);
// }
//
// function allstring(str) {
//   return isNaN(str);
// }
//
// pg.innerHTML = str;

// -----------------------------

// var arr = [3, 9, 15, 18];
//
// var arrQ = arr.map(quad);
//
// function quad(item, i, arr) {
//   return Math.pow(item, arr[i-1]);
// }
//
// pg.innerHTML = arrQ;

// ------------------------------

var obj = {
  name: 'Vova',
  phone: 678380971,
  car: false,
  email: 'deftime@gmail.com',
  title: 'pal'
};

var rez = count(obj, 'time');
pg.innerHTML = rez;

function count(ob, prop) {
  var i = 0;
  if (prop in ob) {
    for (var key in ob) {
      if (key) {
        i++;
      }
    }
    return i;
  }
  return 'No property in object!';
}
