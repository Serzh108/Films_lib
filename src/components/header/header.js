import './header.css';
import movie from '../../services/services';
import movieListTemplate from '../../templates/card.hbs';
import refs from '../../services/refs';
import myLibrary from '../localStorage/localStorage'; // ???
import pagination from '../../components/pagination/pagination'
import watched from '../../components/watched/watched';
import { loadQueueFilms, test } from '../../components/watched/watched';


const headerMarkup = `<div class="header__main container">
<div href="#" class="header__logo js_header_logo">
  <img src="../../assets/images/icon_film_m.png" alt="logotype" width="22" height="22">
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
</div>`;


const headerMain = document.querySelector('.js_header');

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
    document.querySelector('.jsLiblist').classList.add('invisible');
    document.querySelector('.JsmovieListWrapper').classList.remove('invisible');
    console.log(e.target)
    document.querySelector('.page-list').innerHTML = '';
    movie.fetchPopularMovies()
    document.querySelector('.singleMoviePreview').classList.add('invisible');
    document.querySelector('.main_section').classList.remove('invisible');
    document.querySelector('.js_header').classList.remove('details');
    document.querySelector('.js_search-input').classList.add('active');
    document.querySelector('.js_header_list').children[0].classList.add('active');
    document.querySelector('.js_header_list').children[1].classList.remove('active');
    document.querySelector('.js_header_btn_wraper').classList.remove('active');
    document.querySelector('.search_form').reset();

  
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
    // for home to remove lib
    document.querySelector('.jsLiblist').classList.add('invisible');
    document.querySelector('.JsmovieListWrapper').classList.remove('invisible');
  } else {
    buttonLib.classList.add('active');
  }

  if (e.target.dataset.position === "library"){
    loadQueueFilms();
    test();
    console.log('queue');
  }

  document.querySelector('.singleMoviePreview').classList.add('invisible');
  document.querySelector('.main_section').classList.remove('invisible');
  

  // document.querySelector('.singleMoviePreview').style.display = "none";
}

// headerLogo.addEventListener('click', setPopularFilm);

// function setPopularFilm(e) {

// };

watched();

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

// buttonWatched.addEventListener('click', clickButtonWatched);
// buttonQueue.addEventListener('click', clickButtonQueue);

// function clickButtonWatched() {
//   console.log('button Watched clicked!'); // temp!
//   buttonQueue.classList.remove('active');
//   buttonWatched.classList.remove('active');

//   buttonWatched.classList.add('active');
//   // call function read from LocalStorage & markUp
//   const watchedArray = myLibrary.getItemLocalStorage('watched');
//   console.log('watchedArray: ', watchedArray); // temp!
//   //temp!!!
//   refs.movieList.innerHTML = '';
//   refs.movieList.innerHTML = '<li>T E S T</li>';
//   // x.insertAdjacentElement('afterbegin', movieListTemplate(watchedArray));
// }

// function clickButtonQueue() {
//   console.log('button Queue clicked!'); // temp!
//   buttonWatched.classList.remove('active');
//   buttonQueue.classList.remove('active');

//   buttonQueue.classList.add('active');
//   // call function read from LocalStorage & markUp
//   const queueArray = myLibrary.getItemLocalStorage('queue');
//   console.log('queueArray: ', queueArray); // temp!
// }

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
