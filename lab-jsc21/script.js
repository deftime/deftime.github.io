// let arr = [23, 1, 33, 43, 4, 22, 6, 8, 3, 5, 23, 2, 56, 0, 5];
//
// function findNum(num) {
//   let rez = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if ((arr[i] + arr[j]) == num) {
//         rez.push(arr[i]);
//         rez.push(arr[j]);
//         return rez;
//       }
//     }
//   }
//   return rez;
// }
//
// console.time('123');
// console.log(findNum(24));
// console.timeEnd('123');

// --------------------------------

// let someArr = [1, 2, 3, 4, 5, 6, 7];
//
// function rev(arr) {
//   let startLen = arr.length;
//   for (let i = arr.length - 1; i > -1; i--) {
//     arr.push(arr[i]);
//     // arr.shift();
//   }
//   for (let j = 0; j < startLen; j++) {
//     arr.shift();
//   }
// }
//
// rev(someArr);

// --------------------------------

// function sum(a) {
//   function inner(b) {
//     a + b;
//     return inner(b);
//   }
//   return inner;
// }
//
// console.log(sum(2)(3));

// ---------------------------------

let a = {
  elem: [1, 2, 6, "privet", false],
  i: 0,
  valueOf: function() {
    return this.elem[this.i++];
    // return !undefined;
  },
}


// console.log(a == 1 && a == 2 && a == 6 && a == "privet" && a == false);
