// var arr = [5, 10, 15, 20];
// var rez = howManyVariants(arr);
//
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i] == rez[i]());
// }
//
// function howManyVariants(mass) {
//   var newMass = [];
//   for (var i = 0; i < mass.length; i++) {
//     // newMass[i] = function(x) {
//     //   return mass[x];
//     // }.bind(null, i);
//     newMass[i] = (function(x){
//       return function (){
//         return mass[x]
//       }
//     })(i)
//   }
//   return newMass;
// }
