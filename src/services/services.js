import movieListTemplate from '../templates/card.hbs'
import refs from '../services/refs';
import movieDetails from '../components/details/details'
import changeHeaderBg from '../components/header/header'
export default {
  baseURL: 'https://api.themoviedb.org/3',
  key: '?api_key=20f20d883cac0d777d3eec349954fec5',
  imagePath: 'https://image.tmdb.org/t/p/w500/',
  searchPoint: '/search/movie',
  popularFilms: '/discover/movie',
  pupularityFilter: '&sort_by=popularity.desc',
  page: 1,
  maxPage: 0,
  four: 4,
  query: 'blood',
  fetchPopularMovies() {
    const fetchGenres = this.fetchGenres();
    const fetchFilms = this.fetchPopular();
    return Promise.all([fetchGenres, fetchFilms])
      .then(result => {
        const genreList = result[0].genres;
        const films = result[1].results;
        // console.log(genreList);
        const mappedFilms = [...films]
        mappedFilms.map(elem => {
          // console.log(elem.original_title.length);
          if (elem.poster_path === null) {
            elem.poster_path = 'https://i.pinimg.com/originals/c9/8c/78/c98c78f972e620b4d70d59bc53dc9644.gif'
          } else {
            elem.poster_path = 'https://image.tmdb.org/t/p/w500' + elem.poster_path;
          }
          elem.popularity = elem.popularity.toFixed(1);
          if (elem.title.length > 35) {
            elem.title = elem.title.slice(0, 35) + '...';
          }
          elem.release_date = elem.release_date.slice(0, 4);
          elem.genre_ids = elem.genre_ids.map(genreNum => {
            const foundGenre = genreList.find(genreId => {
              if (genreId.id === genreNum) {
                return genreId.id;
              }
            })
            return foundGenre.name;
          });
          if (elem.genre_ids.length > 2) {
            elem.genre_ids = elem.genre_ids.slice(0, 2)
          };
          elem.genre_ids = elem.genre_ids.slice(',').join(', ');
        })
        this.maxPage = result[1].total_pages;
        // --- option
        console.log(mappedFilms);
        const reducedFilms = mappedFilms.reduce((str, elem) => {
          str += movieListTemplate(elem)
          return str;
        }, '');
        refs.movieList.innerHTML = reducedFilms;
        refs.movieList.addEventListener('click', this.handleListItemClick);
        // return mappedFilms
      this.showAdvert();

      
      })
  },
  fetchMovies() {
    const fetchGenres = this.fetchGenres();
    const fetchFilms = this.fetchFilms();
    return Promise.all([fetchGenres, fetchFilms])
      .then(result => {
        const genreList = result[0].genres;
        const films = result[1].results;
        // console.log(genreList);
        const mappedFilms = [...films]
        mappedFilms.map(elem => {
          // console.log(elem.original_title.length);
          if (elem.poster_path === null) {
            elem.poster_path = 'https://i.pinimg.com/originals/c9/8c/78/c98c78f972e620b4d70d59bc53dc9644.gif'
          } else {
            elem.poster_path = 'https://image.tmdb.org/t/p/w500' + elem.poster_path;
          }
          elem.popularity = elem.popularity.toFixed(1);
          if (elem.title.length > 35) {
            elem.title = elem.title.slice(0, 35) + '...';
          }
          elem.release_date = elem.release_date.slice(0, 4);
          elem.genre_ids = elem.genre_ids.map(genreNum => {
            const foundGenre = genreList.find(genreId => {
              if (genreId.id === genreNum) {
                return genreId.id;
              }
            })
            
            return foundGenre.name;

          });

          if (elem.genre_ids.length > 2) {
            elem.genre_ids = elem.genre_ids.slice(0, 2)
          };
          elem.genre_ids = elem.genre_ids.slice(',').join(', ');
        })
        // console.log(mappedFilms);
        this.maxPage = result[1].total_pages;
        refs.movieList.addEventListener('click', this.handleListItemClick);



        // -----------------
        // return mappedFilms
        // -----------------
        // ---NEW VERSION
        const filmsArr = mappedFilms.reduce((str, elem)=>{
          str += movieListTemplate(elem)
          return str;
      }, '');
      buildMarkUp(filmsArr);
      function buildMarkUp(templateResult){
        refs.movieList.innerHTML = templateResult;
      };
      this.showAdvert();
      })

  },
  fetchFilms() {
    const requestStr = this.baseURL + this.searchPoint + this.key + `&query='${this.query}'` + `&page=${this.page}`;
    return this.fetchRequest(requestStr).then(data => {
        return data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  // VIZEVAET FILMY PO POPULIARNIM
  fetchPopular() {
    const requestStr = `https://api.themoviedb.org/3/discover/movie?api_key=20f20d883cac0d777d3eec349954fec5&sort_by=popularity.desc&year=2020` + this.page;
    return this.fetchRequest(requestStr);
  },
  // PEREVODIT V JSON NASHI ZAPROSY
  fetchRequest(requestStr) {
    return fetch(requestStr).then(response => {
      const data = response.json();
      return data;
    });
  },
  // VERNET FILM PO ID
  fetchId(id) {
    const requestStr = `${this.baseURL}/movie/${id}${this.key}&language=en-US`;
    return fetch(requestStr)
      .then(response => response.json())
      .then(film => {
        if (film.poster_path === null) {
          film.poster_path = 'https://i.pinimg.com/originals/c9/8c/78/c98c78f972e620b4d70d59bc53dc9644.gif'
        } else {
          film.poster_path = 'https://image.tmdb.org/t/p/w500' + film.poster_path;
        }
        film.popularity = film.popularity.toFixed(1);
        film.release_date = film.release_date.slice(0, 4);
        return this.getExactGenres(film);
      });
  },
  //VERNET ZHANRY
  fetchGenres() {
    const requestStr = `${this.baseURL}/genre/movie/list${this.key}&language=en-US`
    return fetch(requestStr)
      .then(response => response.json());
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(value) {
    this.query = value;
  },
  incrementPage() {
    this.page += 1;
  },
  decrementPage() {
    this.page -= 1;
  },
  resetPage() {
    this.page = 1;
  },
  sortGeneres(item) {
    this.fetchFilms().then(data => {
        return data.results[1].genre_ids;
      })
      .then(ids => {
        this.fetchGenres().then(genres => {
          // const genresArr = genres.genres;
          // const finalGenres = ids.map(item =>{
          //     return filteredGenres(genresArr, item);
          // });
          const finalGenres2 = ids.reduce((acc, item) => {
            const genre = movie.filteredGenres(genresArr, item);
            acc.push(genre[0].name);
            return acc;
          }, []);
        })
      })
  },
  filteredGenres(arr, id) {
    return arr.filter(elem => elem.id === id);
  },
  getExactGenres(obj) {
    const genres = obj.genres;
    const readyFilms = obj;
    const reducedGenres = genres.reduce((arr, elem) => {
      arr.push(elem.name);
      return arr;
    }, []);
    readyFilms.genres = reducedGenres;
    return readyFilms
  },
  handleListItemClick(e) {
    if (e.target === e.currentTarget) return;
    let currentMovieId;
    if (e.target.nodeName !== 'LI') {
      currentMovieId = e.target.closest('li').dataset.id;
    } else {
      currentMovieId = e.target.closest('ul').closest('li').dataset.id;
    }
    refs.mainSection.classList.add('invisible');
    refs.singleMoviePreview.classList.remove('invisible');
    movieDetails.showMovieDetails(currentMovieId);
    document.querySelector('.jsLiblist').classList.add('invisible');
    changeHeaderBg();
    
    
  },
  showAdvert(){
    if(window.innerWidth >= 1024){
      if([...document.querySelector('.js_filmsList').children].length%3!==0){
        const markUp = `
        <li class="filmsList_item" data-id="12312312344223423423423">
<img clas="filmsList-item-img" src="https://i.pinimg.com/474x/4b/eb/65/4beb659d6cfa53ff9af80c298f6156a0.jpg" width="272" height="406" alt="first">

<h2 class="filmsList_item-title">Your add could be here</h2>
<ul class="filmsList_decsription-wrapper">
    <li class="filmsList_description-item">Google ads</li>
    <li class="filmsList_description-item">2020 </li>
    <li class="filmsList_item-popular">9999</li>
</ul>
</li>
        `
        const li = document.createElement('li');
        li.classList.add('filmsList_item');
        li.innerHTML = markUp;
        // const p = document.createElement('p');
        // p.innerHTML = 'Your add could be here';
        // li.appendChild(p);
        document.querySelector('.js_filmsList').appendChild(li);
      };
  };  
  },
  // handleListItemClick(e) {
  //   if (e.target === e.currentTarget) return;
  //   let currentMovieId;
  //   if (e.target.nodeName !== 'LI') {
  //     currentMovieId = e.target.closest('li').dataset.id;
  //   } else {
  //     currentMovieId = e.target.closest('ul').closest('li').dataset.id;
  //   }
  //   refs.mainSection.classList.add('invisible');
  //   refs.singleMoviePreview.classList.remove('invisible');
  //   movieDetails.showMovieDetails(currentMovieId);
    
  // },

  
}
