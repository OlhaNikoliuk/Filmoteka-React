import { useState, useEffect } from "react";
import * as moviesAPI from "../services/FetchMovies";

function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI.fetchFullMovieInformation("379686").then((data) => {
      console.log(data);
      setMovie(data);
    });
  });

  return <h2>MovieDetailsPage</h2>;
}

export default MovieDetailsPage;
