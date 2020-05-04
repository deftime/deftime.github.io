function Constr(lk, tit, pr) {
  this.link = lk;
  this.title = tit;
  this.price = pr;
}


var clss = document.getElementsByClassName('main-goods__tile');

for (let key of clss) {
  key.addEventListener('click', stopClick);
}

function stopClick(event) {
  event.preventDefault();
  let srch = event.currentTarget.children[1].innerHTML;
  for (let i = 0; i < arrGoods.length; i++) {
    if (arrGoods[i].title !== srch) {
      continue;
    } else {
      alert('Object found!');
    }
  }
}


var arrGoods = [];

for (let key of clss) {
  arrGoods.push(new Constr(key.children[0].firstElementChild.getAttribute('src'), key.children[1].innerHTML, key.children[2].textContent));
}
