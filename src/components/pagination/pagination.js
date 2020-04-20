import refs from '../../services/refs.js'
import movie from '../../services/services';
import movieListTemplate from '../../templates/card.hbs';
import paginationNemplate from '../../templates/pagination.hbs';


movie.fetchFilms().then(films =>{
    insertMarkUp(films.total_pages);
    refs.pagination.addEventListener('click', handlePage);;
})


function buildMarkUp(templateResult){
    refs.movieList.innerHTML = templateResult;
}

function handlePage(e){
    const currentPage = Number(e.target.innerHTML);
    console.log(e.target);
    if(e.target.classList.contains('right')){
        movie.incrementPage();
        movie.fetchFilms().then(films =>  {
            console.log(films.results)
            insertMarkUp(films.total_pages);
            return films.results.reduce((str, elem)=>{
                str += movieListTemplate(elem)
                buildMarkUp(str);
                return str;
            }   , '');
        })
        
    }else if(e.target.classList.contains('left')){
        movie.decrementPage();
        movie.fetchFilms().then(films =>  {
            console.log(films.results)
            insertMarkUp(films.total_pages);
            return films.results.reduce((str, elem)=>{
                str += movieListTemplate(elem)
                buildMarkUp(str);
                return str;
            }   , '');
        })
    }
    else if((e.target.nodeName !== 'LI') || (currentPage === NaN)){
        return
    }else{
        movie.page = currentPage;
        movie.fetchFilms().then(films =>  {
            console.log(films.results)
            insertMarkUp(films.total_pages);
            return films.results.reduce((str, elem)=>{
                str += movieListTemplate(elem)
                buildMarkUp(str);
                return str;
            }   , '');
        })
    };
    
}



function makePagination(pageNum){
    const pages = Array(pageNum).fill().map((_, i) => i+1);
    const currentPage = movie.page
    const sliced = pages.slice(currentPage-1,currentPage+4);
    const objPages = {
        totalPages: pageNum,
        pageItems:sliced,
    }
    const markUp = paginationNemplate(objPages);
    return markUp;
}

function insertMarkUp(pageNum){
    refs.pagination.innerHTML = makePagination(pageNum);
}
