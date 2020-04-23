import moviePreviewTemplate from '../../templates/movieDetailCard.hbs';
import movie from '../../services/services';
import refs from '../../services/refs';
import '../../components/details/details.css';

export default {
  showMovieDetails(id) {
    render(id);
  
  }
}

// ==================button first

function render(id) {
  movie.fetchId(id).then(data => {
    refs.singleMoviePreview.innerHTML = moviePreviewTemplate(data);
    // check wathed films
    let filmInLocalStorage = findFilmInLocalStorage(data);
    if (filmInLocalStorage) {
      bindButtonsToRemove(data);
    } else {
      bindButtonsToAdd(data);
    }
    // check queue
     filmInLocalStorage = findFilmInLocalStorageQueue(data);
    if (filmInLocalStorage) {
      bindButtonsToRemoveQueue(data);
    } else {
      bindButtonsToAddQueue(data);
    }
  });
}
function findFilmInLocalStorage(film) {
  let watchedFilms = JSON.parse(localStorage.getItem("watched-films"));
  if (!watchedFilms) {
    return null;
  }
  let findedFilm = watchedFilms.find(el => el.id === film.id);
  console.log(findedFilm);
  return findedFilm;
}
function bindButtonsToAdd(film) {
  const addFilmsButton = document.querySelector('.button_addwatched');
  addFilmsButton.addEventListener('click', () => {
    addToWatched(film);
  });
}
function bindButtonsToRemove(film) {
  let addFilmsButton = document.querySelector('.button_addwatched');
  addFilmsButton.innerText = "delete";
  addFilmsButton.style = "background-color:red";
  addFilmsButton.addEventListener('click', () => {
    deleteFromWatched(film);
  });
}
function addToWatched(film) {
  // add to local storage
  let watchedFilmsArray = JSON.parse(localStorage.getItem("watched-films"));
  if (!watchedFilmsArray) {
    watchedFilmsArray = [];
  }
  watchedFilmsArray.push(film);
  localStorage.setItem("watched-films", JSON.stringify(watchedFilmsArray));
  // change button style
  let addFilmsButton = document.querySelector('.button_addwatched');
  addFilmsButton.innerText = "delete";
  addFilmsButton.style = "background-color:red";
  // change button event
  addFilmsButton.addEventListener('click', () => {
    deleteFromWatched(film);
  });
}
function deleteFromWatched(film) {
  // remove from local storage 
  let watchedFilmsArray = JSON.parse(localStorage.getItem("watched-films"));
  let filteredFilms = watchedFilmsArray.filter(el => el.id !== film.id);
  localStorage.setItem("watched-films", JSON.stringify(filteredFilms));
  // change button style
  let addFilmsButton = document.querySelector('.button_addwatched');
  addFilmsButton.innerText ="add in watched"
  addFilmsButton.style = "background-color:#ff6b08";
  // change button event
  addFilmsButton.addEventListener('click', () => {
    addToWatched(film);
  });
}

// ------------------------------------------------------------------------

function bindButtonsToAddQueue(film) {
  const addFilmsButton = document.querySelector('.button_addqueue');
  addFilmsButton.addEventListener('click', () => {
    addToQueue(film);
  });
}

function bindButtonsToRemoveQueue(film) {
  let addFilmsButton = document.querySelector('.button_addqueue');
  addFilmsButton.innerText = "delete";
  addFilmsButton.style = "background-color:red";
  addFilmsButton.addEventListener('click', () => {
    deleteFromQueue(film);
  });
}

function findFilmInLocalStorageQueue(film) {
  let queueFilms = JSON.parse(localStorage.getItem("queue-films"));
  if (!queueFilms) {
    return null;
  }
  let findedQueueFilm = queueFilms.find(el => el.id === film.id);
  console.log(findedQueueFilm);
  return findedQueueFilm;
}

function addToQueue(film) {
  // add to local storage
  let queueFilmsArray = JSON.parse(localStorage.getItem("queue-films"));
  if (!queueFilmsArray) {
    queueFilmsArray = [];
  }
  queueFilmsArray.push(film);
  localStorage.setItem("queue-films", JSON.stringify(queueFilmsArray));
  // change button style
  let addButtonQueue = document.querySelector('.button_addqueue')
  addButtonQueue.innerText = "delete";
  addButtonQueue.style = "background-color:red";
  // change button event
  addButtonQueue.addEventListener('click', () => {
    deleteFromQueue(film);
  });
}

function deleteFromQueue(film) {
  // remove from local storage 
  let queueFilmsArray = JSON.parse(localStorage.getItem("queue-films"));
  let filteredQueueFilms = queueFilmsArray.filter(el => el.id !== film.id);
  localStorage.setItem("queue-films", JSON.stringify(filteredQueueFilms));
  // change button style
  let addButtonQueue = document.querySelector('.button_addqueue');
  addButtonQueue.innerText ="add in queue"
  addButtonQueue.style = "background-color:#ff6b08";
  // change button event
  addButtonQueue.addEventListener('click', () => {
    addToQueue(film);
  });
}