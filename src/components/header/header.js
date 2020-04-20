import './header.css';

const headerMarkup = `    <div class="header__main container">
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

headerMain.insertAdjacentHTML('beforeend', headerMarkup);

const headerLogo = document.querySelector('.js_header_logo');
const headerList = document.querySelector('.js_header_list');
const searchInput = document.querySelector('.js_search-input');
const buttonLib = document.querySelector('.js_header_btn_wraper');


headerList.addEventListener('click', setActiveItem);

function setActiveItem(e) {

  if (e.target.nodeName !== 'LI') {
    return
  }
  const liItems = headerList.children;

  liItems[0].classList.remove('active');
  liItems[1].classList.remove('active');

  e.target.classList.add('active');

  if (headerMain.classList.contains('library')) {
    headerMain.classList.remove('library');
  }
  if (e.target.dataset.position !== 'home') {
    headerMain.classList.add(e.target.dataset.position);
  }

  buttonLib.classList.remove('active');
  searchInput.classList.remove('active');

  if (e.target.dataset.position === 'home') {
    searchInput.classList.add('active');
  } else {
    buttonLib.classList.add('active');
  }
};
