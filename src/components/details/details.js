import moviePreviewTemplate from '../../templates/movieDetailCard.hbs';
import movie from '../../services/services';
import refs from '../../services/refs';
import '../../components/details/details.css'

export default {
  showMovieDetails(id) {
    movie.fetchId(id).then(data => {
      refs.singleMoviePreview.innerHTML = moviePreviewTemplate(data);
    })
  }
}
