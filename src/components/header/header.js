import './header.css';
import movie from '../../services/services';
import movieListTemplate from '../../templates/card.hbs';
import refs from '../../services/refs';

const headerMarkup = `
<div class="header__main container">
  <div href="#" class="header__logo js_header_logo">
  <svg 
      class="header__logo-svg"
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" 
      viewBox="0 0 24 24" 
      fill="none" stroke="#fff" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      class="feather feather-film">
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
      <line x1="7" y1="2" x2="7" y2="22"></line>
      <line x1="17" y1="2" x2="17" y2="22"></line>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <line x1="2" y1="7" x2="7" y2="7"></line>
      <line x1="2" y1="17" x2="7" y2="17"></line>
      <line x1="17" y1="17" x2="22" y2="17"></line>
      <line x1="17" y1="7" x2="22" y2="7"></line>
  </svg>
    <span>Filmoteka</span>
  </div>
  <ul class="header__list js_header_list">
    <li class="header__item active" data-position="home">Home</li>
    <li class="header__item" data-position="library">My Library</li>
  </ul>
</div>
<!--Input Vova-->
<div class="search-input js_search-input container active">
  <form class="search_form">
    <input type="text" name="search" class="header_input" placeholder="Поиск фильмов" />
  </form>
  <p class="error_message ">Search result not successful. Enter the correct movie name and try again.</p>
</div>
<!--Button Vova-->
<div class="header_btn_wraper js_header_btn_wraper container">
  <button class="button_watched">Watched</button>
  <button class="button_queue">Queue</button>
</div>
`;

// const headerMain = document.querySelector('.js_header');

refs.headerMain.insertAdjacentHTML('beforeend', headerMarkup);

const searchQuery = document.querySelector('.search_form');
// console.log('search_form = ', searchQuery);
// console.log('search_form.elements = ', searchQuery.elements.search);
searchQuery.addEventListener('submit', queryHandler);
function queryHandler(e) {  
  e.preventDefault();
  if (e.currentTarget.elements.search.value === '') {
    console.log('Search query is empty!!');
    return
  }
  // if (e.target.nodeName !=='FORM') { return } 
  const searchQuery = e.currentTarget.elements.search.value;
//   console.log('searchQuery = ', searchQuery);  // TEMP!!!
  movie.query = searchQuery;
  console.log(movie.query);
  movie.fetchMovies()
  .then(films => {
    return films
})
// movie.fetchFilms().then(films =>  {
//     // console.log(films.results);
//     return films.results
// })
.then(filmsArr =>{
    return filmsArr.reduce((str, elem)=>{
        str += movieListTemplate(elem)
        return str;
    }, '')
})
.then(string =>{
    // console.log(string);
    buildMarkUp(string);
})
function buildMarkUp(templateResult){
    refs.movieList.innerHTML = templateResult;
}
;
}

const headerLogo = document.querySelector('.js_header_logo');
const headerList = document.querySelector('.js_header_list');
const searchInput = document.querySelector('.js_search-input');
const buttonLib = document.querySelector('.js_header_btn_wraper');


headerList.addEventListener('click', setActiveItem);

headerLogo.addEventListener('click', moveToDetails);

function setActiveItem(e) {

  if (e.target.nodeName !== 'LI') {
    return
  }
  const liItems = headerList.children;

  liItems[0].classList.remove('active');
  liItems[1].classList.remove('active');

  e.target.classList.add('active');

  if (refs.headerMain.classList.contains('library')) {
    refs.headerMain.classList.remove('library');
  }
  if (e.target.dataset.position !== 'home') {
    refs.headerMain.classList.add(e.target.dataset.position);
  }

  buttonLib.classList.remove('active');
  searchInput.classList.remove('active');

  if (e.target.dataset.position === 'home') {
    searchInput.classList.add('active');
  } else {
    buttonLib.classList.add('active');
  }
};

// headerLogo.addEventListener('click', setPopularFilm);

// function setPopularFilm(e) {

// };

// ===============================================
function moveToDetails() {
  const liItems = headerList.children;
  liItems[0].classList.remove('active');
  liItems[1].classList.remove('active');

  buttonLib.classList.remove('active');
  searchInput.classList.remove('active');

  if (refs.headerMain.classList.contains('library')) {
    refs.headerMain.classList.remove('library');
  }

  refs.headerMain.classList.add('details');
};
