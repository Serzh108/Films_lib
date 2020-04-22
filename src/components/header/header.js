import './header.css';
import movie from '../../services/services';
import movieListTemplate from '../../templates/card.hbs'
import refs from '../../services/refs';


const headerMarkup = `    <div class="header__main container">
<div href="#" class="header__logo js_header_logo">
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