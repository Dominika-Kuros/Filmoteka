import './sass/main.scss';
import { fetchPopular } from './js/fetch';
import { removeLoader } from './js/loader';
import { displayMovies } from './js/search';

import './js/pagination';
import './js/modal-devs';
import { removeModal } from './js/modal';
import { createPagination } from './js/pagination';

//fech danych z serwera każdorazowo odpala>>>
// showLoader();

// spełnienie promise/pobranie danych  z serwera(tutaj zastąpione timeoutem)>>>
// setTimeout(() => {
//   removeLoader();
// }, 2000);

fetchPopular()
  .then(popularMovies => {
    console.log(popularMovies.results);
    const movies = popularMovies.results;
    displayMovies(movies);
    createPagination(popularMovies, 'popular');
    removeModal();
  })
  .catch(error => console.error(error))
  .finally(() => {
    removeLoader();
  });