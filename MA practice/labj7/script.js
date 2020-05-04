var pg = document.getElementById('block');

// pg.innerHTML = plus(10, 20, 30, 40, 50, 60, 70, 80, 100, 50, 70);
//
// function plus(...arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// ---------------------------------------

// function f1() {
//   pg.innerHTML = 'Function 1!';
// }
//
// function f2() {
//   pg.innerHTML = 'Function 2!';
// }
//
// function runInner(a, b) {
//   b();
//   setTimeout(a, 2000);
// }
//
// runInner(f1, f2);

// -------------------------------------

// function func() {
//   if(!func.count) {
//     func.count = 0;
//   };
//   return func.count++;
// }
//
// func();
// func();
// pg.innerHTML = func();

// -----------------------------------

// function func(name, sur) {
//   func.fullname = name + ' ' + sur;
// }
//
// func('Gomer', 'Simpson');
// pg.innerHTML = func.fullname;

// -----------------------------------

// function func(name, sur) {
//   func.fullname = con;
//   function con() {
//     return name + ' ' + sur;
//   }
// }
//
// func('Mike', 'Noman');
// pg.innerHTML = func.fullname();

// ----------------------------------

function sum(a, b) {
  a += 1;
  if (!b) {
    return function(b) {
      return a + b;
    }
  } else {
    return a + b;
  }
}

pg.innerHTML = sum(2, 3);
