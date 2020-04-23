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
