// var slt = document.forms.myForm.elements.sel;
// var newOpt = new Option('Third', 'th');
// slt.appendChild(newOpt);
//
// slt.addEventListener('change', () => {document.querySelector('span').innerHTML = `Value: ${slt.options[slt.selectedIndex].value} | Text: ${slt.options[slt.selectedIndex].text}`});

// -----------------------------------

// var edt = document.getElementById('block');
// var txt = document.getElementById('text');
// var cont = '';
//
// edt.addEventListener('focus', editBlock);
// txt.addEventListener('blur', saveBlock);
// txt.addEventListener('keydown', pressEnter);
//
// function editBlock() {
//   txt.value = cont;
//   txt.hidden = false;
//   edt.hidden = true;
//   txt.focus();
// }
//
// function saveBlock() {
//   cont = txt.value;
//   edt.innerHTML = txt.value;
//   txt.hidden = true;
//   edt.hidden = false;
// }
//
// function pressEnter(event) {
//   if (event.key == 'Enter') {
//     cont = txt.value;
//     edt.innerHTML = txt.value;
//     txt.hidden = true;
//     edt.hidden = false;
//   }
// }



// function editBlock() {
//   edt.outerHTML = '<textarea></textarea>';
//   let ta = document.querySelector('textarea');    // Поле меняеться только
//   ta.focus();                                     // один раз.
//   ta.addEventListener('blur', saveBlock);
//   ta.addEventListener('keydown', pressEnter);
//   function saveBlock() {
//     ta.outerHTML = `<div>${ta.value}</div>`;
//   }
//   function pressEnter(event) {
//     if (event.key == 'Enter') {
//       ta.outerHTML = `<div>${ta.value}</div>`;
//     }
//   }
// }

// ----------------------------------------------------

// var butt = document.querySelector('.open');
// var wrap = document.querySelector('.darkWrapper');
// var form = document.forms.myForm;
// var exit = document.forms.myForm.elements.cancel;
//
// butt.addEventListener('click', showWin);
// myForm.addEventListener('submit', showVal);
// exit.addEventListener('click', closeWin);
// form.elements.line.addEventListener('keydown', pressEsc);
//
// function showWin() {
//   wrap.style.display = 'flex';
//   form.elements.line.focus();
// }
//
// function showVal(event) {
//   if (form.elements.line.value == "") {
//     event.preventDefault();
//   } else {
//     alert(`You enter: ${form.elements.line.value}`);
//   }
//
// }
//
// function closeWin() {
//   wrap.style.display = 'none';
// }
//
// function pressEsc(event) {
//   if (event.key == 'Escape') {
//     wrap.style.display = 'none';
//   }
// }

// -----------------------------------------------

var form = document.forms.calc;
var input = document.querySelector('#input');
var output = document.querySelector('#output');

form.addEventListener('input', showRez);

function showRez() {
  let rez = Math.round(form.elements.start.value * (1 + form.elements.perc.value * form.elements.term.options[form.elements.term.selectedIndex].value));
  input.innerHTML = form.elements.start.value;
  output.innerHTML = rez;
}
