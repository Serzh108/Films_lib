import './card.css';
import movieListTemplate from '../../templates/card.hbs'
import refs from '../../services/refs';
import movie from '../../services/services'

export default ()=>{
    movie.fetchFilms().then(films =>  {
        // console.log(films.results);
        return films.results
    })
    .then(filmsArr =>{
        return filmsArr.reduce((str, elem)=>{
            str += movieListTemplate(elem)
            return str;
        }, '')
    })
    .then(string =>{
        // console.log(string);
        buildMarkUp(string);
    })
    function buildMarkUp(templateResult){
        refs.movieList.innerHTML = templateResult;
    }
    
    
}






// console.log(template);
