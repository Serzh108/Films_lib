import './header.css';
import movie from '../../services/services';
import movieListTemplate from '../../templates/card.hbs';
import refs from '../../services/refs';
import myLibrary from '../localStorage/localStorage'; // ???
import pagination from '../../components/pagination/pagination'

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
  <button class="button_queue active">Queue</button>
</div>
`;

refs.headerMain.insertAdjacentHTML('beforeend', headerMarkup);

const headerList = document.querySelector('.js_header_list');
const searchInput = document.querySelector('.js_search-input');
const buttonLib = document.querySelector('.js_header_btn_wraper');
const buttonWatched = document.querySelector('.button_watched');
const buttonQueue = document.querySelector('.button_queue');

headerList.addEventListener('click', setActiveItem);

const searchQuery = document.querySelector('.search_form');
// console.log('search_form = ', searchQuery);
// console.log('search_form.elements = ', searchQuery.elements.search);
searchQuery.addEventListener('submit', queryHandler);

function queryHandler(e) {
  e.preventDefault();
  if (e.currentTarget.elements.search.value === '') {
    console.log('Search query is empty!!');
    return;
  }
  // if (e.target.nodeName !=='FORM') { return }
  const searchQuery = e.currentTarget.elements.search.value;
  //   console.log('searchQuery = ', searchQuery);  // TEMP!!!
  movie.query = searchQuery;
  movie.page = 1;
  movie
    .fetchMovies()
    .then(films => {
      return films;
    })
    .then(filmsArr => {
      return filmsArr.reduce((str, elem) => {
        str += movieListTemplate(elem);
        return str;
      }, '');
    })
    .then(string => {
      // console.log(string);
      buildMarkUp(string);
    });

  function buildMarkUp(templateResult) {
    refs.movieList.innerHTML = templateResult;
  }

  pagination();

}

const headerLogo = document.querySelector('.js_header_logo');
headerLogo.addEventListener('click', getPop);

function getPop(e){
    console.log(e.target)
    movie.fetchPopularMovies();
}

function setActiveItem(e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  const liItems = headerList.children;

  liItems[0].classList.remove('active');
  liItems[1].classList.remove('active');

  e.target.classList.add('active');

  // === was details ===
  if (refs.headerMain.classList.contains('details')) {
    refs.headerMain.classList.remove('details');
  }

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
}

// headerLogo.addEventListener('click', setPopularFilm);

// function setPopularFilm(e) {

// };

// ===============================================
export default()=>{
  const liItems = headerList.children;
  liItems[0].classList.remove('active');
  liItems[1].classList.remove('active');

  buttonLib.classList.remove('active');
  searchInput.classList.remove('active');

  if (refs.headerMain.classList.contains('library')) {
    refs.headerMain.classList.remove('library');
  }

  refs.headerMain.classList.add('details');
}
// // =============== For Illia ===============
buttonWatched.addEventListener('click', clickButtonWatched);
buttonQueue.addEventListener('click', clickButtonQueue);

function clickButtonWatched() {
  console.log('button Watched clicked!'); // temp!
  buttonQueue.classList.remove('active');
  buttonWatched.classList.remove('active');

  buttonWatched.classList.add('active');
  // call function read from LocalStorage & markUp
  const watchedArray = myLibrary.getItemLocalStorage('watched');
  console.log('watchedArray: ', watchedArray); // temp!
  //temp!!!
  refs.movieList.innerHTML = '';
  refs.movieList.innerHTML = '<li>T E S T</li>';
  // x.insertAdjacentElement('afterbegin', movieListTemplate(watchedArray));
}

function clickButtonQueue() {
  console.log('button Queue clicked!'); // temp!
  buttonWatched.classList.remove('active');
  buttonQueue.classList.remove('active');

  buttonQueue.classList.add('active');
  // call function read from LocalStorage & markUp
  const queueArray = myLibrary.getItemLocalStorage('queue');
  console.log('queueArray: ', queueArray); // temp!
}

movie.fetchPopularMovies();




// =================================================
// ============ For Yulia ================
// const buttonAddWatched = document.querySelector('.button_addwatched');
// const buttonAddQueue = document.querySelector('.button_addqueue');

// buttonAddWatched.addEventListener('click', clickButtonAddWatched);
// buttonAddQueue.addEventListener('click', clickButtonAddQueue);

// function clickButtonAddWatched() {
//   console.log('button AddWatched clicked!'); // temp!
//   buttonAddQueue.classList.remove('active');
//   buttonAddWatched.classList.remove('active');

//   buttonAddWatched.classList.add('active');
//   // проверка, есть ли данный фильм в  LocalStorage
//   if(myLibrary.getItemLocalStorage('watched', id)) { //  film id 
//     // есть, меняем текст кнопки
//   } else {
//     // добавляем в очередь
//   }
//если есть то меняем текст кнопки на delete


// call function read from LocalStorage & markUp
// const watchedArray = myLibrary.getItemLocalStorage('watched');
// console.log('watchedArray: ', watchedArray); // temp!
//temp!!!
// const x = document.querySelector('.js_filmsList');
// x.innerHTML = '';
// x.innerHTML = '<li>T E S T</li>'; 
// x.insertAdjacentElement('afterbegin', movieListTemplate(watchedArray));
// }

// function clickButtonAddQueue() {
//   console.log('button AddQueue clicked!'); // temp!
//   buttonAddWatched.classList.remove('active');
//   buttonAddQueue.classList.remove('active');

//   buttonAddQueue.classList.add('active');
// call function read from LocalStorage & markUp
// const queueArray = myLibrary.getItemLocalStorage('queue');
// console.log('queueArray: ', queueArray); // temp!
// }
