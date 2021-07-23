import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as moviesAPI from "../services/FetchMovies";

import MovieRewiews from "../components/MovieReviews/MovieReviews";

function Reviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviesAPI
      .fetchMovieReviews(movieId)
      .then(({ results }) => setReviews(results));
  }, [movieId]);

  return reviews.length !== 0 ? (
    <MovieRewiews reviews={reviews}></MovieRewiews>
  ) : (
    <h2>No reviews for this movie yet ... </h2>
  );
}
export default Reviews;
