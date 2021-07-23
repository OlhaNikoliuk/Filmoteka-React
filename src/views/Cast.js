import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as moviesAPI from "../services/FetchMovies";

import MovieCast from "../components/MovieCast/MovieCast";

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    moviesAPI.fetchMovieCast(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return <MovieCast actors={cast}></MovieCast>;
}

export default Cast;
