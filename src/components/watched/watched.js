import refs from '../../services/refs';
import movieListTemplate from '../../templates/card.hbs';
import services from '../../services/services';

export default () => {
  let buttonWatched = document.querySelector('.button_watched');
  const buttonQueue = document.querySelector('.button_queue');
  buttonWatched.addEventListener('click', loadWatchedFilms);
  buttonQueue.addEventListener('click', loadQueueFilms);
}

function loadWatchedFilms() {
  let watchedFilmsArray = JSON.parse(localStorage.getItem("watched-films"));
  let str = '';
  console.log('ser -> click buttonWatched');// 
  document.querySelector('.button_queue').classList.remove('active');
  document.querySelector('.button_watched').classList.remove('active');
  document.querySelector('.button_watched').classList.add('active')

  watchedFilmsArray.forEach(film => {
    str += movieListTemplate(film);
  });
  document.querySelector('.libList').innerHTML = str;
}

export function loadQueueFilms() {
  const QueueFilmsArray = JSON.parse(localStorage.getItem("queue-films"));
  console.log('ser -> click buttonQueue'); // 
  document.querySelector('.button_watched').classList.remove('active');
  document.querySelector('.button_queue').classList.remove('active');
  document.querySelector('.button_queue').classList.add('active');

  let str = '';
  QueueFilmsArray.forEach(film => {
    str += movieListTemplate(film);
  });
  document.querySelector('.jsLiblist').innerHTML = str;
  console.log('queue function done');
  document.querySelector('.JsmovieListWrapper').classList.add('invisible');
  document.querySelector('.jsLiblist').classList.remove('invisible');
  document.querySelector('.singleMoviePreview').classList.add('invisible');
  // SINGE LIB ITEM PREVIEW
  document.querySelector('.jsLiblist').addEventListener('click', services.handleListItemClick);
}

export function test(){
  console.log('test function done');
}

/*function loadWatchedFilms() {
  let watchedIds = localStr.getLocalStorage("watched-films");
  console.log(watchedIds);
  let html = '';
  refs.movieList.innerHTML = '';
  for (let i = 0; i < watchedIds.length; i++) {
    movie.fetchId(watchedIds[i]).then(data => {
        html += movieListTemplate(data); 
        refs.movieList.innerHTML += movieListTemplate(data);   
    });
  }
  // console.log(html);
  html = '';
}*/
