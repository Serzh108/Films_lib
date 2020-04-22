import moviePreviewTemplate from '../../templates/movieDetailCard.hbs';
import movie from '../../services/services';
import refs from '../../services/refs';
import '../../components/details/details.css'
import changeHeaderBg from '../header/header';

export default {
  showMovieDetails(id) {
    console.log('click')
    changeHeaderBg();
    movie.fetchId(id).then(data => {
      refs.singleMoviePreview.innerHTML = moviePreviewTemplate(data);
    })
  }
}
