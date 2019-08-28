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
//   let borRight = field.offsetLeft + field.clientWidth;
//   let borBot = field.offsetTop + field.clientHeight;
//
//   if (event.clientX <= field.offsetLeft + 20) {
//     x = 0;
//   } else {
//     x = event.clientX - field.offsetLeft - 30;
//   }
//
//   if (event.clientX >= borRight) {
//     x = 260;
//   }
//
//   if (event.clientY <= field.offsetTop + 20) {
//     y = 0;
//   } else {
//     y = event.clientY - field.offsetTop - 30;
//   }
//
//   if (event.clientY >= borBot) {
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

// var blocks = document.querySelectorAll('.cross');
//
// for (let key of blocks) {
//   key.addEventListener('click', hide);
// }
//
//
// function hide(event) {
//   event.target.parentElement.classList.add('close');
// }

// -----------------------------------------------------


// var blc = document.querySelector('.block');
//
// blc.addEventListener('click', askGo);
//
// function askGo(event) {
//   event.preventDefault();
//   if (event.target.nodeName == 'A') {
//     let go = confirm(`Go to link - ${event.target.getAttribute('href')}?`);
//     if (go === true) {
//       window.open(event.target.getAttribute('href'));
//     } else {
//       return false;
//     }
//   }
// }

// ---------------------------------------------

// var rightBut = document.querySelector('.right');
// var leftBut = document.querySelector('.left');
// var inner = document.querySelector('#move');
// var outer = document.querySelector('.block');
//
// rightBut.addEventListener('click', moveSlide);
// leftBut.addEventListener('click', moveSlide);
//
// let mover = 0;
// function moveSlide(event) {
//   let slideLen = 0;
//   let allSlides = inner.children;
//   for (let key of allSlides) {
//     slideLen += key.scrollWidth;
//   }
//   if (this.classList.contains('right')) {
//     if (mover < (slideLen - outer.clientWidth*2)) {
//       mover += outer.clientWidth;
//     }
//     inner.style.transform = `translateX(-${mover}px)`;
//   } else if (this.classList.contains('left')) {
//     if (mover > 0) {
//       mover -= outer.clientWidth;
//     }
//     inner.style.transform = `translateX(-${mover}px)`;
//   }
//   return;
// }

// ------------------------------------------------

// document.querySelector('.block').addEventListener('click', closeWin);
//
// function closeWin(event) {
//   if (!event.target.classList.contains('cross')) {
//     return;
//   }
//   event.target.parentElement.hidden = true;
// }

// --------------------------------------------------

// document.querySelector('#mainUl').addEventListener('click', opener);
//
// function opener(event) {
//   if (event.target.nodeName != 'LI') {
//     return;
//   }
//   event.target.children[0].hidden = !event.target.children[0].hidden;
// }

// -------------------------------------------------

var butts = document.querySelectorAll('button');

document.addEventListener('mouseover', onButt);
document.addEventListener('mouseout', offButt);

function onButt(event) {
  if (!event.target.dataset.tooltip) {
    return;
  }
  let tip = event.target.dataset.tooltip;


  let posTop = event.target.getBoundingClientRect().top;
  console.log(posTop);
  let posLeft = event.target.getBoundingClientRect().left;
  let tool = document.createElement('div');
  tool.innerHTML = tip;
  tool.classList.add('tooltip');
  if (posTop < 25) {
    tool.style.top = (posTop + 5 + event.target.offsetHeight) + 'px';
  } else {
    tool.style.top = (posTop - 5 - event.target.offsetHeight) + 'px';
  }
  tool.style.left = posLeft + 'px';
  document.body.append(tool);
}

function offButt(event) {
  if (!event.target.dataset.tooltip) {
    return;
  }
  if (document.querySelector('.tooltip')) {
    document.querySelector('.tooltip').remove();
  }
}
