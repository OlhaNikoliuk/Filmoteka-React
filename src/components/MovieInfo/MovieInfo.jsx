function MovieInfo({ movie, genres }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
        width='250'
      />
      <div>
      <p>{movie.original_title}</p>
      <p>Year: {parseInt(movie.release_date)}</p>
      <p>Votes: {movie.vote_average}</p>
      <p>Popularity: {movie.popularity}</p>
      <p>Owerview: {movie.overview}</p>
      <p>Genres: {genres.join(', ')}</p>
      </div>

      <div>
        <p>More information</p>
      </div>
    </div>
  );
}


export default MovieInfo;
