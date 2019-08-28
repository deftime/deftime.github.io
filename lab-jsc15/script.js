// var block = document.querySelector('.block');
// var img = document.querySelector('img');
// var span = document.querySelector('span');
//
// document.addEventListener('DOMContentLoaded', () => {
//   span.innerHTML = 'DOM ready!';
//   window.onbeforeunload = function () {
//     return false;
//   };
// });

// window.addEventListener('beforeunload', () => {
//   return false;
// });

// ---------------------------
// var anyObj = {
//   name: 'List',
//   num: 34,
//   bool: true,
//   mass: [2, 'two', 'five']
// };
//
//
// var toJ = document.querySelector('#toJ');
// var fromJ = document.querySelector('#fromJ');
// var ta = document.forms.innerForm.elements.ta;
// var taO = document.forms.innerForm.elements.taObj;
//
// toJ.addEventListener('click', toStr);
// fromJ.addEventListener('click', toObj);
// window.onload = function () {
//   ta.value = '';
//   taO.value = '';
// }
//
// function toStr() {
//   ta.value = JSON.stringify(anyObj);
// }
//
// function toObj() {
//   let newObj = JSON.parse(ta.value);
//   for (let key in newObj) {
//     taO.value += `${key}: ${newObj[key]}\n`;
//   }
// }

// ------------------------

var toJ = document.querySelector('#toJ');
var ta = document.forms.innerForm.elements.ta;

var anyObj = {
  name: 'List',
  num: 34,
  bool: true,
  mass: [2, 'two', 'five']
};

toJ.addEventListener('click', toStr);
window.onload = function () {
  ta.value = '';
}

function toStr() {
  ta.value = JSON.stringify(anyObj);
}

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
// xhr.responseType = 'json';

xhr.send();

xhr.onload = function () {
  console.log(xhr.response);
  console.log(JSON.parse(xhr.response));
  console.log(xhr.status);

}
