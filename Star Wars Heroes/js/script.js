let currentHeroList;
let heroContainer = document.querySelector('.list-wrap');
let heroData = document.querySelector('.hero-wrap');
let pagsNum = document.querySelectorAll('.pagination span');
let backButt = document.querySelector('.back-butt');
let filmsBlock = document.querySelector('#films_list');
let shipsBlock = document.querySelector('#ships_list');
let transportBlock = document.querySelector('#transport_list');

fetch('https://swapi.dev/api/people/')
.then(response => response.json())
.then(obj => currentHeroList = obj.results)
.then(e => listCreator(currentHeroList));

for (let key of pagsNum) {
  key.addEventListener('click', paging);
}
backButt.addEventListener('click', backToList);

function paging(event) {
  heroContainer.innerHTML = '';
  for (let keyIn of pagsNum) {
    if (keyIn.style.fontWeight == 'bold') {
      keyIn.style.fontWeight = 'normal';
      keyIn.style.textDecoration = 'none';
      event.target.style.fontWeight = 'bold';
      event.target.style.textDecoration = 'underline';
    }
  }
  fetch(`https://swapi.dev/api/people/?page=${event.target.innerText}`)
  .then(response => response.json())
  .then(obj => currentHeroList = obj.results)
  .then(e => listCreator(currentHeroList))
  .catch(er => console.log(er));
}

function listCreator(list) {
  for (var i = 0; i < list.length; i++) {
    (function(i) {
      setTimeout(function() {
        let hero = document.createElement('div');
        hero.classList.add('hero');
        let heroPic = document.createElement('div');
        heroPic.classList.add('pic');
        heroPic.style.backgroundImage = `url('./images/heroes/${list[i].name}_face.jpg')`;
        let heroName = document.createElement('span');
        heroName.innerText = list[i].name;

        hero.append(heroPic);
        hero.append(heroName);

        heroPic.addEventListener('click', showHero);

        heroContainer.append(hero);

        setTimeout(()=>{
          hero.style.opacity = '1';
        }, 200)

      }, 200*i)
    })(i);

  }
}

function showHero(event) {
  heroContainer.parentElement.style.height = '0px';
  heroContainer.parentElement.style.padding = '0px 20px';

  setTimeout(()=>{
    heroContainer.style.display = 'none';
    heroData.style.display = 'block';
    pagsNum[0].parentElement.style.display = 'none';
    backButt.style.display = 'block';
    backButt.style.position = 'absolute';
    heroContainer.parentElement.style.padding = '20px';
    heroContainer.parentElement.style.height = '610px';
  }, 800);

  let selectedHero;

  for (let i = 0; i < currentHeroList.length; i++) {
    if (currentHeroList[i].name == event.target.nextElementSibling.innerText) {
      selectedHero = currentHeroList[i];
      break;
    }
  }

  document.querySelector('.photo').style.backgroundImage = `url('./images/heroes/${selectedHero.name}.jpg')`;

  document.querySelector('#name').innerText = selectedHero.name;
  document.querySelector('#gender').innerText = selectedHero.gender;
  document.querySelector('#height').innerText = selectedHero.height;
  document.querySelector('#mass').innerText = selectedHero.mass;
  getData(selectedHero.species, document.querySelector('#race'));
  getData(selectedHero.homeworld, document.querySelector('#planet'));

  getFilms(selectedHero);
  getShips(selectedHero);
  getTransport(selectedHero);

}

function backToList() {
  heroContainer.parentElement.style.height = '0px';
  heroContainer.parentElement.style.padding = '0px 20px';

  setTimeout(()=>{
    heroContainer.style.display = 'flex';
    heroData.style.display = 'none';
    pagsNum[0].parentElement.style.display = 'block';
    heroContainer.parentElement.style.height = '450px';
    backButt.style.display = 'none';
    heroContainer.parentElement.style.padding = '20px';
    heroContainer.parentElement.style.height = '450px';
  }, 900);

}

function getData(link, place) {
  place.innerText = '';
  if (link.length != 0) {
    fetch(link)
    .then(response => response.json())
    .then(obj => {
      if (obj.name) {
        place.innerText = obj.name;
      } else {
        place. innerText = obj.title;
      }
    })
  } else {
    place.innerText = 'Human';
  }

}

function getFilms(hero) {
  filmsBlock.innerHTML = '';

  for (let i = 0; i < hero.films.length; i++) {
    let li = document.createElement('li');
    getData(hero.films[i], li);
    filmsBlock.append(li);
  }
}

function getShips(hero) {
  shipsBlock.innerHTML = '';

  for (let i = 0; i < hero.starships.length; i++) {
    let li = document.createElement('li');
    getData(hero.starships[i], li);
    shipsBlock.append(li);
  }

  if (shipsBlock.children.length == 0) {
    shipsBlock.innerHTML = '<em>-none-</em>';
  }
}

function getTransport(hero) {
  transportBlock.innerHTML = '';

  for (let i = 0; i < hero.vehicles.length; i++) {
    let li = document.createElement('li');
    getData(hero.vehicles[i], li);
    transportBlock.append(li);
  }

  if (transportBlock.children.length == 0) {
    transportBlock.innerHTML = '<em>-none-</em>';
  }
}
