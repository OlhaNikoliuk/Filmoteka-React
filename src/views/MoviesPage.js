import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import * as moviesAPI from "../services/FetchMovies";
import { SearchForm } from "../components/SearchForm/SearchForm";
import MovieList from "../components/MovieList/MovieList";
import Pagination from "../components/Pagination/Pagination";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  const location = useLocation();
  const history = useHistory();

  const query = new URLSearchParams(location.search).get("query");
  const selectedPage = Number(
    new URLSearchParams(location.search).get("page") ?? 1
  );

  useEffect(() => {
    if (!query) return;

    moviesAPI
      .fetchMovieByName(query, selectedPage)
      .then(({ results, total_pages }) => {
        if (results.length === 0) {
          toast.error("Oops.. no movies found", {
            duration: 4000,
            position: "top-right",
          });
        }

        setTotalPages(total_pages);
        setMovies(results);
      });
  }, [query, selectedPage]);

  const handleFormSubmit = (query) => {
    history.push({ ...location, search: `query=${query}&page=${1}` });
  };

  const handlePageClick = (data) => {
    let selected = data.selected;

    history.push({
      ...location,
      search: `query=${query}&page=${selected + 1}`,
    });
  };

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit}></SearchForm>
      {totalPages !== 0 && (
        <>
          <MovieList movies={movies}></MovieList>
          <Pagination pages={totalPages} onPageClick={handlePageClick} />
        </>
      )}
      <Toaster />
    </>
  );
}

export default MoviesPage;
