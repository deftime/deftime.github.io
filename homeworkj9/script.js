// var list = document.querySelector('.list');
// var li = list.querySelectorAll('li');
//
// list.addEventListener('click', clickSel);
// list.addEventListener('dblclick', function(e) {
//   e.preventDefault();
// });
//
// function clickSel(event) {
//   if (event.target.tagName != 'LI') {
//     return;
//   }
//
//   if (event.metaKey) {
//     event.target.style.backgroundColor = 'green';
//   } else {
//     for (let key of li) {
//       if (key.style.backgroundColor == 'green') {
//         key.style.backgroundColor = '';
//       }
//     }
//     event.target.style.backgroundColor = 'green';
//   }
// }

// -------------------------------

// var line = document.querySelector('span');
//
// document.addEventListener('keyup', pressTwo);
//
// function pressTwo(event) {
//   if (event.key == 'q') {
//     line.innerHTML = 'Keys detected!';
//     line.style.color = 'red';
//   }
// }

// ----------------------------------

// var up = document.querySelector('.upper');
//
// up.addEventListener('click', goUp);
// document.addEventListener('scroll', hideUp);
//
// function goUp() {
//   document.documentElement.scrollTop = 0;
// }
//
// function hideUp() {
//   if (window.pageYOffset <= 530) {
//     up.classList.add('upper-hide');
//   } else {
//     up.classList.remove('upper-hide');
//   }
// }

// ----------------------------------------

var block = document.querySelector('.block');

for (let i = 0; i <= 40; i++) {
  let dateDiv = document.createElement('div');
  dateDiv.append(new Date);
  dateDiv.style.marginBottom = '10px';
  block.append(dateDiv);
}

document.addEventListener('scroll', infPage);

function infPage() {
  let docWin = document.documentElement.getBoundingClientRect().bottom;
  if (docWin < document.documentElement.clientHeight + 100) {
    for (let i = 0; i <= 5; i++) {
      let dateDiv = document.createElement('div');
      dateDiv.append(new Date);
      dateDiv.style.marginBottom = '10px';
      block.append(dateDiv);
    }
  }
}
