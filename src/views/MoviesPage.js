import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import * as moviesAPI from "../services/FetchMovies";
import { SearchForm } from "../components/SearchForm/SearchForm";
import MovieList from "../components/MovieList/MovieList";

function MoviesPage() {
  // const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const history = useHistory();

  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (!query) return;
    moviesAPI.fetchMovieByName(query).then(({ results }) => setMovies(results));
  }, [query]);

  const handleFormSubmit = (query) => {
    // setQuery(query);
    history.push({ ...location, search: `query=${query}` });
  };

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit}></SearchForm>
      {movies && <MovieList movies={movies}></MovieList>}
    </>
  );
}

export default MoviesPage;
