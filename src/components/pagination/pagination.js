import refs from '../../services/refs.js'
import movie from '../../services/services';
import movieListTemplate from '../../templates/card.hbs';
import paginationStart from '../../templates/paginationStart.hbs';
import paginationNemplate from '../../templates/pagination.hbs';
import movieList from '../card/card';
import movieDetails from '../../components/details/details';

movie.fetchMovies().then(films => {
  if(!films.length){
      refs.movieList.innerHTML = "<h1>NO SHIT SHERLOK</h1>"
  };
  if(movie.maxPage > 1){
    movieList();
    console.log('start pagination')
    // ----CHECK BELOW 5 
    lowerThanFive();


  refs.pagination.addEventListener('click', handlePage);
  }else{
      return;
  }
});

function handlePage(e){
    // ------ CHECKS FOR HTTING THE RIGHT BUTTON
    const button = e.target;
    if(button === e.currentTarget) return;
    if(movie.page >= movie.maxPage - 3){
        console.log('we are at the end');
    }
    if(button === e.currentTarget.firstChild){
        if(movie.page === 1){
            console.log('already at first page');
            return;
        }
        movie.decrementPage();
        movieList();
        removePagintionBg();
        refs.pagination.querySelectorAll('li').forEach(elem =>{
            if(Number(elem.innerHTML) === movie.page){
                elem.classList.add('page-list__item-active');
            };  
        });
        // console.log(movie.page);

        return;
    }
    if(button === e.currentTarget.lastChild){
        if(movie.page === movie.maxPage) return;
        console.log('end button');
        if(movie.page < 5){
            movie.incrementPage();
            console.log(movie.page);
            removePagintionBg();
            refs.pagination.querySelectorAll('li').forEach(elem =>{
                if(Number(elem.innerHTML) === movie.page){
                    elem.classList.add('page-list__item-active');
                };  
            });
            return; 

        }else{
            movie.incrementPage();
            movieList();
    
            greaterThanFive();
            return;
        }
    };
    // ---------------------
    // REMOVE LIST NUMBER BACKGROUBD
    if(Number(button.innerHTML) === 1){
        console.log('hitting first again');
        movie.page = 1;
        console.log(movie.page);
        lowerThanFive();
        return;
    }
    removePagintionBg();
    // ---------
    button.classList.add('page-list__item-active');
    movie.page = Number(button.innerHTML);
    movieList();

    // ------ GREATER THAN FIVE FUNCTION
    greaterThanFive();
}
// -----------SEPARATE FUNCTIONS ---------

function lowerThanFive(){
    if(movie.page < 5 ){
        console.log('below 5');
        const pages = Array(movie.maxPage).fill().map((_, i) => i + 1);
        const slicedPages = pages.slice(0,5)
        const preTemplateObj = {
            pageItems:slicedPages
        }
        const markUp = paginationStart(preTemplateObj);
        insertMarkUp(markUp);
        const listItems = refs.pagination.querySelectorAll('li');
    // --------
        // adding bg to first page
        listItems.forEach(item =>{
            if(item.innerHTML == 1){
                item.classList.add('page-list__item-active');
            }
        });

    }
}


function greaterThanFive(){
    if(movie.page >= 5){
        console.log('5 OR ABOVE');
        const pages = Array(movie.maxPage).fill().map((_, i) => i + 1);
        const pagesArr = [movie.page-2,movie.page-1,movie.page,movie.page+1,movie.page+2]
        const objPages = {
            totalPages: movie.maxPage,
            pageItems: pagesArr,
        };
        insertMarkUp(paginationNemplate(objPages));
        refs.pagination.children[5].classList.add('page-list__item-active');
    };

}


function insertMarkUp(str){
    refs.pagination.innerHTML = str;
}


function removePagintionBg(){
    const listItems = refs.pagination.querySelectorAll('li');
    // adding bg to first page
    listItems.forEach(item =>{
            item.classList.remove('page-list__item-active');
    });
}

// --------------- old version
// movie.fetchFilms().then(films => {
//   insertMarkUp(films.total_pages);
//   maxPage = films.total_pages;
//   refs.pagination.addEventListener('click', handlePage);;
// });


// function buildMarkUp(templateResult) {
//   refs.movieList.innerHTML = templateResult;
// }

// function handlePage(e) {
//   if (e.target.classList.contains('dots')) return;
//   if (e.target.classList.contains('digit')) {};
//   const currentPage = Number(e.target.innerHTML);
//   if (e.target.classList.contains('right')) {
//     if (movie.page === maxPage) {
//       return
//     }
//     movie.incrementPage();
//     movie.fetchFilms().then(films => {
//       insertMarkUp(films.total_pages);
//       return films.results.reduce((str, elem) => {
//         str += movieListTemplate(elem)
//         buildMarkUp(str);
//         return str;
//       }, '');
//     });
//   } else if (e.target.classList.contains('left')) {
//     if (movie.page === 1) return;
//     movie.decrementPage();
//     movie.fetchFilms().then(films => {
//       insertMarkUp(films.total_pages);
//       return films.results.reduce((str, elem) => {
//         str += movieListTemplate(elem)
//         buildMarkUp(str);
//         return str;
//       }, '');
//     })
//   } else if ((e.target.nodeName !== 'LI') || (currentPage === NaN)) {
//     return
//   } else {
//     movie.page = currentPage;
//     movie.fetchFilms().then(films => {
//       insertMarkUp(films.total_pages);
//       return films.results.reduce((str, elem) => {
//         str += movieListTemplate(elem)
//         buildMarkUp(str);
//         return str;
//       }, '');
//     });
//   };

// }

// function makePagination(pageNum) {
//   const pages = Array(pageNum).fill().map((_, i) => i + 1);
//   const currentPage = movie.page
//   let leftEnd;
//   let rightEnd;
//   let sliced;
//   if(currentPage <= 3){
//     //   console.log('first');
//       leftEnd = currentPage;
//       rightEnd = currentPage + 5;
//   }
//   else if(currentPage <= 3){
//     leftEnd = currentPage - 1;
//     rightEnd = currentPage + 4;
//   } else if (currentPage >= 4) {
//     leftEnd = currentPage - 2;
//     rightEnd = currentPage + 3;
//   }

//   sliced = pages.slice(leftEnd, rightEnd);

//   const objPages = {
//     totalPages: pageNum,
//     pageItems: sliced,
//   }
//   const markUp = paginationNemplate(objPages);
//   return markUp;
// }

// function insertMarkUp(pageNum) {
//   refs.pagination.innerHTML = makePagination(pageNum);
//   refs.pagination.children[5].classList.add('page-list__item-active');
//   console.log(movie.page)
//   refs.movieList.addEventListener('click', handleListItemClick);
// }


// function handleListItemClick(e) {
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
// }
