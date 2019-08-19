var butLog = document.querySelector('.butt');
var butCls = document.querySelector('.cross');
var wrp = document.querySelector('.darkWrapper');
var form = document.forms.logForm;
var rez = document.querySelector('#rez');
var logRez = document.querySelector('#logRez');
var pasRez = document.querySelector('#pasRez');

butLog.addEventListener('click', openLog);
butCls.addEventListener('click', clsLog);
form.addEventListener('submit', checkData);
form.elements.login.addEventListener('blur', checkLog);
form.elements.pass.addEventListener('blur', checkPas);

function openLog() {
  wrp.style.display = 'flex';
};

function clsLog() {
  wrp.style.display = 'none';
  form.reset();
  logRez.innerHTML = '';
  pasRez.innerHTML = '';

};

function checkData(event) {
  event.preventDefault();
  if (form.elements.login.value != 'admin' || form.elements.pass.value != 'code') {
    return false;
    // rez.innerHTML = 'Access DENIDED!';
    // rez.style.color = 'red';
    // form.elements.login.style.borderColor = 'red';
    // form.elements.pass.style.borderColor = 'red';
  } else {
    form.remove();
    document.querySelector('.win').insertAdjacentHTML('beforeend', '<div class="accept">Access ACCEPT!</div>');
    setTimeout(()=>{wrp.style.display = 'none'}, 1000);
    setTimeout(()=>{
      document.querySelector('.accept').remove();
      document.querySelector('.win').appendChild(form);
      form.reset();
      logRez.innerHTML = '';
      pasRez.innerHTML = '';
    }, 2000);

    // rez.innerHTML = 'Enter accept';
    // rez.style.color = 'green';
    // form.elements.login.style.borderColor = 'green';
    // form.elements.pass.style.borderColor = 'green';
  }
}

function checkLog() {
  if (form.elements.login.value != 'admin') {
    logRez.innerHTML = 'False!';
    logRez.style.color = 'red';
  } else {
    logRez.innerHTML = 'OK';
    logRez.style.color = 'green';
  }
}
function checkPas() {
  if (form.elements.pass.value != 'code') {
    pasRez.innerHTML = 'False!';
    pasRez.style.color = 'red';
  } else {
    pasRez.innerHTML = 'OK';
    pasRez.style.color = 'green';
  }
}
