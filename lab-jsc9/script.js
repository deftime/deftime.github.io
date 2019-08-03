var pg = document.getElementById('block');
// var bFirst = document.getElementById('first');
// var bSecond = document.getElementById('second');
// var bThird = document.getElementById('third');
// var bFourth = document.getElementById('fourth');
// var bFifth = document.getElementById('fifth');
// var bSixth = document.getElementById('sixth');
// var bSeventh = document.getElementById('seventh');
// var bEight = document.getElementById('eighth');
//
// var win = window;
// var newWin = '';
//
// // bSecond.onclick = openWin;
// bFirst.addEventListener('click', function(){uniProp(win)});
// bSecond.addEventListener('click', openWin);
// bThird.addEventListener('click', function(){uniProp(newWin)});
// bFourth.addEventListener('click', function(){resize(newWin)});
// bFifth.addEventListener('click', function(){resize(win)});
// bSixth.addEventListener('click', scroll);
// bSeventh.addEventListener('click', focus);
// bEight.addEventListener('click', function(){close(newWin)});
//
//
// function uniProp(obj) {  //Универсальная функция
//   if (!obj) {            //для любого окна.
//     alert('No new window!');
//     return;
//   }
//   let all;
//   for (let key in obj) {
//     all += `${key}<br>`;
//   }
//   // all = Object.getOwnPropertyNames(obj);
//   obj.document.write(all);
// }
//
// function allPret() {
//
//   // let all = Object.getOwnPropertyNames(window);
//   // document.write(all);
//
//   let all;
//   for (let key in win) {
//     all += `${key}<br>`;
//   }
//   document.write(all);
//
//   // document.write(Object.keys(window));
// }  //Отдельная функция для текущего окна
//
// function openWin() {
//   newWin = window.open("", "", "width=300, height=300");
//   pg.innerHTML = 'New tab was OPEN!';
// }
//
// function pretNewWin() {
//   let all;
//   for (let key in newWin) {
//     all += `${key}<br>`;
//   }
//   if (!newWin) {
//     alert('No new window!');
//     return;
//   }
//    // all = Object.getOwnPropertyNames(newWin);
//    newWin.document.write(all);
// } //Отдельная функция для нового окна
//
// function resize(obj) {
//   if (!obj) {
//     alert('No new window!');
//     return;
//   }
//   obj.resizeTo(500, 500);
// }
//
// function scroll() {
//   if (!newWin) {
//     alert('No new window!');
//     return;
//   }
//   newWin.scrollBy(300, 300);
// }
//
// function close(obj) {
//   obj.close();
//   pg.innerHTML = 'New tab was CLOSE!';
//   setTimeout("pg.innerHTML = 'Press any button'", 2000);
// }
//
// function focus() {
//   newWin = window.open('', '', "width=300, height=300");
//   setTimeout(newWin.blur(), 2000);
// }

// -------------------------

var parse = document.getElementById('parse');
parse.addEventListener('click', displayRez);

function urlArgs() {
  var args = {};
  var query = this.location.search.substring(1);
  var pairs = query.split('&');

  for (let i = 0; i < pairs.length; i++) {
    var pos = pairs[i].indexOf('=');
    if (pos == -1) continue;
    var name = pairs[i].substring(0, pos);
    var value = pairs[i].substring(pos+1);
    value = decodeURIComponent(value);
    args[name] = value;
  }
  return args;
}

function displayRez() {
  let rez = urlArgs();
  let all = '';
  for (let key in rez) {
    all += `${key}: ${rez[key]}<br>`;
  }
  return pg.innerHTML = all;
}
