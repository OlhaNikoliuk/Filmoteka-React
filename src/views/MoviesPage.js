import { useState, useEffect } from "react";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import * as moviesAPI from "../services/FetchMovies";

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const { url } = useRouteMatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    setQuery(e.target.elements.movie.value);
  };

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }
    moviesAPI.fetchMovieByName(query).then(({ results }) => setMovies(results));
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search film"
          name="movie"
        ></input>
        <button type="submit"> Search Film</button>
      </form>

      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <NavLink to={`${url}/${movie.id}`}>
                {movie.title ? movie.title : movie.original_name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MoviesPage;
