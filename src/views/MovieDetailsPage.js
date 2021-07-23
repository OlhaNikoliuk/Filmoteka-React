import { useState, useEffect } from "react";
import { useParams, useRouteMatch, Route, NavLink } from "react-router-dom";
import * as moviesAPI from "../services/FetchMovies";
import MovieInfo from "../components/MovieInfo/MovieInfo";
import Cast from "./Cast";
import Reviews from "./Reviews";

function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  // const { url } = useRouteMatch();

  useEffect(() => {
    moviesAPI.fetchFullMovieInformation(movieId).then((movie) => {
      setMovie(movie);
      setGenres(movie.genres.map((genre) => genre.name));
    });
  }, [movieId]);

  return (
    <>
      <MovieInfo movie={movie} genres={genres}></MovieInfo>

      {/* <NavLink to={`${url}/cast`}>Cast</NavLink>
      <NavLink to={`${url}/reviews`}>Reviews</NavLink> */}

      <Route path="/movies/:movieId/cast">
        <Cast></Cast>
      </Route>

      <Route path="/movies/:movieId/reviews">
        <Reviews></Reviews>
      </Route>
    </>
  );
}

export default MovieDetailsPage;
