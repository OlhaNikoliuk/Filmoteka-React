import { useState, useEffect } from "react";

import * as moviesAPI from "../services/FetchMovies";
import MovieList from "../components/MovieList/MovieList";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesAPI.fetchTrendingMovies().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return <>{movies && <MovieList movies={movies}></MovieList>}</>;
}

export default HomePage;
