var butt = document.querySelector('button');

butt.addEventListener('click', reqFun);



function reqFun() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');

  xhr.send();

  let resp;

  xhr.onload = function() {
    // rez.innerHTML = '';
    resp = JSON.parse(xhr.response);

    for (let i = 0; i < resp.length; i++) {
      (function(j) {
        setTimeout(function() {
          let cont = document.createElement('div');
          cont.classList.add('cont');
          let fLine = document.createElement('div');
          let sLine = document.createElement('div');
          sLine.style.fontWeight = 'bold';
          sLine.style.textAlign = 'center';
          let chk = document.createElement('input');
          chk.setAttribute('type', 'checkbox');
          chk.disabled = true;
          fLine.innerHTML = `User ID - ${resp[j].userId}`;
          sLine.innerHTML = `${resp[j].title}`;
          if (resp[j].completed == true) {
            chk.checked = true;
          }
          cont.append(fLine);
          cont.append(sLine);
          cont.append(chk);
          document.body.append(cont);
        }, 1000*i);
      })(i);


    }



    // rez.append(fLine);
    // rez.append(sLine);
    //
    // if (resp.completed == false) {
    //   rez.style.borderColor = 'red';
    // } else {
    //   rez.style.borderColor = 'green';
    // }
  }


}
