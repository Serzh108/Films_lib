import './components/header/header';
import './components/buttons/buttons';
// import './components/card/card';
import './components/contacts/contacts';
import './components/details/details';
import './components/footer/footer';
import './components/footer/contact';
import './components/form/form';
import './components/localStorage/localStorage';
import './components/pagination/pagination';
import './components/watched/watched';

// ----------- TIMUR
import movies from './services/services';
import './components/pagination/pagination.css';

import './stylesheet/main.css';


// sortGeneres();

// movies.fetchFilms().then(films => console.log(films));

// function sortGeneres(item){
//     movies.fetchFilms().then(data=>{
//         console.log(data.results[1].genre_ids)
//         return data.results[19].genre_ids;
//     })
//     .then(ids =>{
//         movies.fetchGenres().then(genres =>{
//             const genresArr = genres.genres;
//             const finalGenres = ids.map(item =>{
//                 return filteredGenres(genresArr, item);
//             });
//             const finalGenres2 = ids.reduce((acc, item) =>{
//                 const genre = filteredGenres(genresArr, item);
//                 acc.push(genre[0].name);
//                 return acc;
//             },[]);
//             console.log(finalGenres2);
//         })

//     })
// }

// function filteredGenres(arr, id){
//     return arr.filter(elem => elem.id === id);
// };

// sortGeneres();

// ----------------------------
