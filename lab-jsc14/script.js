var block = document.querySelector('#block');
var inpFrom = document.forms.inpForm.elements.inpFrom;
var inpTo = document.forms.inpForm.elements.inpTo;

document.querySelector('#insDiv').addEventListener('click', insertDiv);
document.querySelector('#insP').addEventListener('click', insertP);
// block.addEventListener('click', coordsClick);
block.addEventListener('mousedown', cordFrom);
block.addEventListener('mouseup', cordTo);

function insertDiv() {
  let newDiv = document.createElement('div');
  newDiv.classList.add('red');
  block.append(newDiv);
}

function insertP() {
  let newP = document.createElement('p');
  newP.innerHTML = 'Random text string';
  block.append(newP);
}

function coordsClick(event) {
  ipt.value = `${event.clientX}:${event.clientY} - ${event.pageX}:${event.pageX}`;
}

function cordFrom(event) {
  inpFrom.value = `${event.clientX}:${event.clientY}`;
}

function cordTo(event) {
  inpTo.value = `${event.clientX}:${event.clientY}`;
}
