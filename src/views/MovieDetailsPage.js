import { useState, useEffect } from "react";
import { useParams, Route } from "react-router-dom";
import * as moviesAPI from "../services/FetchMovies";
import MovieInfo from "../components/MovieInfo/MovieInfo";
import Cast from "./Cast";
import Reviews from "./Reviews";

function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    moviesAPI.fetchFullMovieInformation(movieId).then((movie) => {
      setMovie(movie);
      setGenres(movie.genres.map((genre) => genre.name));
    });
  }, [movieId]);

  return (
    <>
      <MovieInfo
        poster_path={movie.poster_path}
        original_title={movie.original_title}
        release_date={movie.release_date}
        vote_average={movie.vote_average}
        popularity={movie.popularity}
        overview={movie.overview}
        genres={genres}
      ></MovieInfo>

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
