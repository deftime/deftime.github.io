// let cook = document.cookie;
//
// function parsCook(str) {
//   let massCook = str.split(';');
//   let objCook = {};
//
//   for (let i = 0; i < massCook.length; i++) {
//     let massElem = massCook[i].split('=');
//     let name = massElem[0];
//     let value = massElem[1];
//     objCook[name] = value;
//   }
//   return objCook;
// }
//
// console.log(parsCook(cook));

// -------------------------------

var rez = document.querySelector('#rez');
var form = document.forms.myForm;
var input = document.forms.myForm.elements.myInp;
var butt = document.forms.myForm.elements.myButt;

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

if (localStorage.getItem('user')) {
  // let form = document.createElement('form');
  // form.name = 'MyForm';
  // let input = document.createElement('input');
  // input.type = 'text';
  // input.name = 'myInp';
  // input.required = true;
  // let butt = document.createElement('button');
  // butt.type = ''
  form.hidden = true;
  rez.innerHTML = `Hello, ${localStorage.getItem('user')}`;
}

form.addEventListener('submit', enterIn);

function enterIn(event) {
  event.preventDefault();
  let strIn = input.value;
  localStorage.setItem('user', strIn);
  // document.cookie = `user=${strIn}`;
  rez.innerHTML = `Hello, ${strIn}`;

  form.hidden = true;
}
