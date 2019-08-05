var pg = document.getElementById('block');

var words = document.getElementsByTagName('div');
var cls = document.getElementsByClassName('iter')
var str = '';

var ask = +prompt('How old are you?', '');

if (ask <= 18) {
  for (let i = 0; i < cls.length; i++ ) {
    str += `${cls[i].innerText} `;
  }
} else if (ask > 18 && ask <= 25) {
  for (let i = 0; i < words.length; i++ ) {
    str += `${words[i].childNodes[1].innerText} `;
  }
} else {
  for (let i = 0; i < words.length; i++ ) {
    // console.log(words[i].childNodes)
    if (!words[i].childNodes[3]) {
    str += `${words[i].childNodes[1].innerHTML} `;
  } else {
    str += `${words[i].childNodes[3].innerHTML} `;
  }
  }
}





document.getElementById('rez').innerHTML = str;
