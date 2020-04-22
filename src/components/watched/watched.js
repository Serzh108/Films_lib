import refs from '../../services/refs';
import movieListTemplate from '../../templates/card.hbs'
export default () => {
  let buttonWatched = document.querySelector('.button_watched');
  const buttonQueue = document.querySelector('.button_queue');
  buttonWatched.addEventListener('click', loadWatchedFilms);
  buttonQueue.addEventListener('click', loadQueueFilms);
}
function loadWatchedFilms() {
  let watchedFilmsArray = JSON.parse(localStorage.getItem("watched-films"));
  refs.movieList.innerHTML = '';
  watchedFilmsArray.forEach(film => {
    refs.movieList.innerHTML += movieListTemplate(film);
  });
}

function loadQueueFilms (){
    const QueueFilmsArray = JSON.parse(localStorage.getItem("queue-films"));
    refs.movieList.innerHTML = '';

    QueueFilmsArray.forEach(film => {
        refs.movieList.innerHTML += movieListTemplate(film);
      });
}
