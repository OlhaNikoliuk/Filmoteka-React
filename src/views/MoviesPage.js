import { useState, useEffect } from "react";
import * as moviesAPI from "../services/FetchMovies";
import { SearchForm } from "../components/SearchForm/SearchForm";
import MovieList from "../components/MovieList/MovieList";

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesAPI.fetchMovieByName(query).then(({ results }) => setMovies(results));
  }, [query]);

  const handleFormSubmit = (query) => {
    setQuery(query);
  };

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit}></SearchForm>
      {movies && <MovieList movies={movies}></MovieList>}
    </>
  );
}

export default MoviesPage;
