import { useState, useEffect, lazy, Suspense } from "react";
import { useParams, Route } from "react-router-dom";
import * as moviesAPI from "../services/FetchMovies";
import MovieInfo from "../components/MovieInfo/MovieInfo";
import { Spinner } from "../components/Spinner/Spinner";
// import Cast from "./Cast";
// import Reviews from "./Reviews";

const Cast = lazy(() => import("./Cast" /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import("./Reviews" /* webpackChunkName: "reviews" */)
);

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

      <Suspense fallback={<Spinner />}>
        <Route path="/movies/:movieId/cast">
          <Cast />
        </Route>

        <Route path="/movies/:movieId/reviews">
          <Reviews />
        </Route>
      </Suspense>
    </>
  );
}

export default MovieDetailsPage;
