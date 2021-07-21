import { useState, useEffect } from "react";
import { useParams, useRouteMatch, Route } from "react-router-dom";
import * as moviesAPI from "../services/FetchMovies";
import MovieInfo from "../components/MovieInfo/MovieInfo";

function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  useEffect(() => {
    moviesAPI.fetchFullMovieInformation(movieId).then((movie) => {
      setMovie(movie);
      setGenres(movie.genres.map((genre) => genre.name));
    });
  }, [movieId]);

  return (
    <>
      <MovieInfo movie={movie} genres={genres}></MovieInfo>
      <Route path={`${url}/cast`}></Route>
    </>
  );
}

export default MovieDetailsPage;
