const API_KEY = "bdae3fe74d911e95dd273f618b321dfb";
const API_URL = "https://api.themoviedb.org/3";

function fetchTrendingMovies() {
  const url = `${API_URL}/trending/all/day?api_key=${API_KEY}`;
  return fetch(url).then((response) => response.json());
}

function fetchMovieByName(movieName) {
  const url = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`;
  return fetch(url).then((response) => response.json());
}

function fetchFullMovieInformation(movieId) {
  const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  return fetch(url).then((response) => response.json());
}

function fetchMovieCast(movieId) {
  const url = `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  return fetch(url).then((response) => response.json());
}

function fetchMovieReviews(movieId) {
  const url = `${API_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  return fetch(url).then((response) => response.json());
}

export {
  fetchTrendingMovies,
  fetchMovieByName,
  fetchFullMovieInformation,
  fetchMovieCast,
  fetchMovieReviews,
};
