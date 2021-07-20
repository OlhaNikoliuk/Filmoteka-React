import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import * as moviesAPI from "../services/FetchMovies";

function HomePage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);

  console.log(url);

  useEffect(() => {
    moviesAPI.fetchTrendingMovies().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <>
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${url}/movies/${movie.id}`}>
                {movie.title ? movie.title : movie.original_name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default HomePage;
