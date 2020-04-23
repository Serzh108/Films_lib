import refs from '../../services/refs.js'
import movie from '../../services/services';
import movieListTemplate from '../../templates/card.hbs';
import paginationStart from '../../templates/paginationStart.hbs';
import paginationNemplate from '../../templates/pagination.hbs';
import paginationEnd from '../../templates/paginationEnd.hbs'
import movieList from '../card/card';
import movieDetails from '../../components/details/details';    
export default ()=>{
movie.fetchMovies().then(films => {
    if(!films.length){
        // refs.movieList.innerHTML = "<h1>NO SHIT SHERLOK</h1>"
        refs.movieList.innerHTML = `<img src="http://driveinstyle.lk/img/img_gif/no_result_found.gif" alt="zaglushka">`
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
      // CHECK FOR LAST PAGE
      if((Number(button.innerHTML) >= movie.maxPage - 3) &&(Number(button.innerHTML) <= movie.maxPage)){
          movie.page = Number(button.innerHTML);
          if((movie.page >= movie.maxPage - 3) &&(movie.page <= movie.maxPage)){
              console.log(button.innerHTML)
              console.log('kachiiiiiinggg');
              const pages = Array(movie.maxPage).fill().map((_, i) => i + 1);
              const slicedPages = pages.slice(-5)
              const preTemplateObj = {
                  pageItems:slicedPages
              }
              const markUp = paginationEnd(preTemplateObj);
              console.log('markUp')
              // movie.page = Number(button.innerHTML);
              insertMarkUp(markUp);
              const listItems = refs.pagination.querySelectorAll('li');
                  listItems.forEach(item =>{
                      if(item.innerHTML == movie.page){
                          item.classList.add('page-list__item-active');
                      }
                  });
              return;
          }
      }
  
      if(button === e.currentTarget.firstChild){      
          if(movie.page === 1){
              console.log('already at first page');
              return;
          }
          if(movie.page === movie.maxPage){
              const pages = Array(movie.maxPage).fill().map((_, i) => i + 1);
              const slicedPages = pages.slice(-5)
              const preTemplateObj = {
                  pageItems:slicedPages
              }
              const markUp = paginationEnd(preTemplateObj);
              movie.decrementPage();
              insertMarkUp(markUp);
              const listItems = refs.pagination.querySelectorAll('li');
                  listItems.forEach(item =>{
                      if(item.innerHTML == movie.page){
                          item.classList.add('page-list__item-active');
                      }
                  });
              return;
          }
          if(movie.page > 5){
              movie.decrementPage();
              movieList();
              greaterThanFive();
              return;
          }else{
              if(Number(button.innerHTML <=5)){
  
                  console.log('kachiiiiing');
              }
              movie.decrementPage();
              movieList();
              console.log(movie.page);
              console.log('below 5');
              const pages = Array(movie.maxPage).fill().map((_, i) => i + 1);
              const slicedPages = pages.slice(0,5)
              const preTemplateObj = {
                  pageItems:slicedPages
              }
              const markUp = paginationStart(preTemplateObj);
              insertMarkUp(markUp);
              const listItems = refs.pagination.querySelectorAll('li');
              removePagintionBg();
              refs.pagination.querySelectorAll('li').forEach(elem =>{
                  if(Number(elem.innerHTML) === movie.page){
                      elem.classList.add('page-list__item-active');
                  };  
              }); 
          }
          return;
      }
      if(button === e.currentTarget.lastChild){
          if(movie.page === movie.maxPage) return;
          console.log('end button');
          if((movie.page >= movie.maxPage - 3) &&(movie.page <= movie.maxPage)){
              console.log('seems like the end');
              const pages = Array(movie.maxPage).fill().map((_, i) => i + 1);
              const slicedPages = pages.slice(-5)
              const preTemplateObj = {
                  pageItems:slicedPages
              }
              const markUp = paginationEnd(preTemplateObj);
              movie.incrementPage();
              insertMarkUp(markUp);
              const listItems = refs.pagination.querySelectorAll('li');
                  listItems.forEach(item =>{
                      if(item.innerHTML == movie.page){
                          item.classList.add('page-list__item-active');
                      }
                  });
              return;
          }
          if(movie.page < 5){
              movie.incrementPage();
              removePagintionBg();
              refs.pagination.querySelectorAll('li').forEach(elem =>{
                  if(Number(elem.innerHTML) === movie.page){
                      elem.classList.add('page-list__item-active');
                  };  
              });
          }else{
              movie.incrementPage();
              greaterThanFive();   
          }
          movieList();
          return;
      };
      // ---------------------
      // REMOVE LIST NUMBER BACKGROUBD
      if(Number(button.innerHTML) === 1){
          console.log('hitting first again');
          movie.page = 1;
          console.log(movie.page);
          movieList();
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
}