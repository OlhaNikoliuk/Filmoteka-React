import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import * as moviesAPI from "../services/FetchMovies";
import MovieList from "../components/MovieList/MovieList";
import Pagination from "../components/Pagination/Pagination";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  const location = useLocation();
  const history = useHistory();

  const selectedPage = Number(
    new URLSearchParams(location.search).get("page") ?? 1
  );

  useEffect(() => {
    moviesAPI
      .fetchTrendingMovies(selectedPage)
      .then(({ results, total_pages }) => {
        setTotalPages(total_pages);
        setMovies(results);
      });
  }, [selectedPage]);

  const handlePageClick = (data) => {
    let selected = data.selected;

    history.push({ ...location, search: `page=${selected + 1}` });
  };

  return (
    <>
      {totalPages && (
        <>
          <MovieList movies={movies}></MovieList>
          <Pagination pages={totalPages} onPageClick={handlePageClick} />
        </>
      )}
    </>
  );
}

export default HomePage;
