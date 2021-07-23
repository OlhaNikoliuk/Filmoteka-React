import { Link, useLocation } from 'react-router-dom';

import { MovieCard, MovieImg, MovieTitle } from './MovieGalCard.styled';
import noimage from '../../images/noimage.jpg';

function MovieGalCard({ id, title, original_name, poster_path }) {
  const location = useLocation();
  return (
    <MovieCard>
      <Link
        to={{
          pathname: `/movies/${id}`,
          state: { from: location },
        }}
      >
        <MovieImg
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : noimage
          }
        ></MovieImg>
        <MovieTitle>{title ? title : original_name}</MovieTitle>
      </Link>
    </MovieCard>
  );
}

export default MovieGalCard;
