import './card.css';
import movieListTemplate from '../../templates/card.hbs'
import refs from '../../services/refs';
import movie from '../../services/services'
// import watched from '../../components/watched/watched';

export default ()=>{
    movie.fetchMovies().then(films => {
        return films
    })
    // watched();
    
}






// console.log(template);
