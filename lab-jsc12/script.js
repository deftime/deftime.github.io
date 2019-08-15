var nam = document.forms[0].elements.name;
var sur = document.forms[0].elements.surname;
var ch = document.forms[0].elements.check;


nam.value = "Name here!";
sur.value = "Surname here!";
ch.checked = true;

// document.getElementById('show').innerHTML = `${nam.value}<br>${sur.value}`;

var sel = document.getElementById('select');

document.getElementById('show').innerHTML = `Index: ${sel.selectedIndex}<br> Attribute: ${sel.value}<br>Value: ${sel.options[1].innerText}`;

document.getElementById('in').addEventListener('change', () => alert('Lost focus!'));
