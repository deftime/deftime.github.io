// var hider = document.getElementById('butt');
//
// hider.addEventListener('click', hideText);
//
// function hideText() {
//   document.body.childNodes[1].lastElementChild.innerHTML = '';
// }

// ---------------------------------

// var self = document.getElementById('butt');
//
// self.addEventListener('click', hideSelf);
//
// function hideSelf() {
//   this.hidden = true;
// }

// -----------------------------------------

// var field = document.getElementById('field');
// var ball = document.getElementById('ball');
//
// field.addEventListener('click', getCord);
//
// function getCord(event) {
//   document.body.lastElementChild.innerHTML = `X: ${event.clientX} - Y: ${event.clientY}`;
//   let x;
//   let y;
//
//   if (event.clientX <= 800) {
//     x = 0;
//   } else {
//     x = event.clientX - 800 - 20;
//   }
//
//   if (event.clientX >= 1100) {
//     x = 260;
//   }
//
//   if (event.clientY <= 320) {
//     y = 0;
//   } else {
//     y = event.clientY - 320 - 20;
//   }
//
//   if (event.clientY >= 620) {
//     y = 260;
//   }
//
//   ball.setAttribute("style", `left: ${x}px; top: ${y}px;`);
// }

// ----------------------------------------------

// var tar = document.querySelector('span');
//
// tar.addEventListener('click', showHide);
//
// function showHide() {
//   if (this.nextElementSibling.hidden == true) {
//     this.nextElementSibling.hidden = false;
//   } else {
//     this.nextElementSibling.hidden = true;
//   }
//
// }

// ----------------------------------------------------

var blocks = document.querySelectorAll('.cross');

for (let key of blocks) {
  key.addEventListener('click', hide);
}


function hide(event) {
  event.target.parentElement.classList.add('close');
}
