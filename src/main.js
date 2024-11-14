import MovieApiService from "./js/movie-service";

const list = document.querySelector(".movies__list");
const prevBtn = document.querySelector(".prev__button");
const nextBtn = document.querySelector(".next__button");

prevBtn.addEventListener("click", onPrevPage);
nextBtn.addEventListener("click", onNextPage);

const movieApiService = new MovieApiService();
loadMovies();

function loadMovies() {
  movieApiService
    .fetchMovies()
    .then((movies) => renderMovies(movies.slice(0, 8)))
    .catch((error) => console.error(error));
}

function renderMovies(movies) {
  const markUp = movies
    .map(
      (movie) => `
  <li class="movie-item">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" >
          <h2>${movie.title}</h2>
          <p>Original language: ${movie.original_language}</p>
          <p>Release date: ${movie.release_date}</p>
          <p>Origin country: ${movie.origin_country}</p>
          <p>Rating: ${movie.vote_average}</p>
        </li>
  `
    )
    .join("");
  list.insertAdjacentHTML("beforeend", markUp);
}

function onPrevPage() {
  movieApiService.decrementPage();
  clearList();
  loadMovies();
  toggleButton();
}

function onNextPage() {
  movieApiService.incrementPage();
  clearList();
  loadMovies();
  toggleButton();
}

function clearList() {
  list.innerHTML = "";
}

function toggleButton() {
  prevBtn.disabled = movieApiService.page <= 1;
}
