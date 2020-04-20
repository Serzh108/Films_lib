import refs from '../../services/refs.js'
import movie from '../../services/services';
import movieListTemplate from '../../templates/card.hbs';
import paginationNemplate from '../../templates/pagination.hbs';
import movieList from '../card/card';
import movieDetails from '../../components/details/details';

movieList();

let maxPage;
movie.fetchFilms().then(films => {
  insertMarkUp(films.total_pages);
  maxPage = films.total_pages;
  refs.pagination.addEventListener('click', handlePage);;
});


function buildMarkUp(templateResult) {
  refs.movieList.innerHTML = templateResult;
}

function handlePage(e) {
  if(e.target.classList.contains('dots')) return;
  if(e.target.classList.contains('digit')){
      console.log(e.target.classList.add('page-list__item-active'));
  };
  const currentPage = Number(e.target.innerHTML);
  if (e.target.classList.contains('right')) {
    if(movie.page === maxPage){
        return
    }
    movie.incrementPage();
    console.log(movie.page);
    movie.fetchFilms().then(films => {
      insertMarkUp(films.total_pages);
      return films.results.reduce((str, elem) => {
        str += movieListTemplate(elem)
        buildMarkUp(str);
        return str;
      }, '');
    });
  } else if(e.target.classList.contains('left')){
    if(movie.page === 1) return;
    movie.decrementPage();
    movie.fetchFilms().then(films => {
      insertMarkUp(films.total_pages);
      return films.results.reduce((str, elem) => {
        str += movieListTemplate(elem)
        buildMarkUp(str);
        return str;
      }, '');
    })
  } else if ((e.target.nodeName !== 'LI') || (currentPage === NaN)) {
    return
  } else {
    console.log('orange')
    movie.page = currentPage;
    movie.fetchFilms().then(films => {
      insertMarkUp(films.total_pages);
      return films.results.reduce((str, elem) => {
        str += movieListTemplate(elem)
        buildMarkUp(str);
        return str;
      }, '');
    });
  };

}

function makePagination(pageNum) {
  const pages = Array(pageNum).fill().map((_, i) => i + 1);
  const currentPage = movie.page
  const leftEnd = currentPage - 3;
  const rightEnd = currentPage + 2
  const sliced = pages.slice(leftEnd, rightEnd);
  const objPages = {
    totalPages: pageNum,
    pageItems: sliced,
  }
  const markUp = paginationNemplate(objPages);
  return markUp;
}

function insertMarkUp(pageNum) {
  refs.pagination.innerHTML = makePagination(pageNum);
  refs.movieList.addEventListener('click', handleListItemClick);
}


function handleListItemClick(e){
    if(e.target === e.currentTarget) return;
    let currentMovieId;
    if(e.target.nodeName !== 'LI'){
        currentMovieId =  e.target.closest('li').dataset.id;
    }else{

        currentMovieId =  e.target.closest('ul').closest('li').dataset.id;
    }
    refs.mainSection.classList.add('invisible');
    refs.singleMoviePreview.classList.remove('invisible');
    movieDetails.showMovieDetails(currentMovieId);
}