import './card.css';
import movieListTemplate from '../../templates/card.hbs'
import refs from '../../services/refs';
import movie from '../../services/services'
// import watched from '../../components/watched/watched';

export default ()=>{
    movie.fetchMovies().then(films => {
        return films
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
    // watched();
    
}






// console.log(template);
