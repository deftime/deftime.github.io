document.querySelector('#butt').addEventListener('click', function() {
  let rez = wordStat(document.querySelector('input').value);

  document.querySelector('.block').innerHTML = '';

  for (let key in rez) {
    document.querySelector('.block').innerHTML += `${key}: ${rez[key]}<br>`;
  }
})


function wordStat(str) {
  let rezObj = {};
  let arrStr = str.split('');
  for (let i = 0; i < arrStr.length; i++) {
    let count = 0;
    for (var j = 0; j < arrStr.length; j++) {
      if (arrStr[i] == arrStr[j]) {
        count++;
      }
    }
    rezObj[arrStr[i]] = count;
  }
  return rezObj;
}
