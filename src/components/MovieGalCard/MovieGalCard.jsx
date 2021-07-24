import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MovieCard, MovieImg, MovieTitle } from './MovieGalCard.styled';
import noimage from '../../images/noimage.jpg';

function MovieGalCard({ id, title, original_name, poster_path, release_date }) {
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
        <MovieTitle>
          {title ? title : original_name} |{' '}
          {release_date ? parseInt(release_date) : ''}
        </MovieTitle>
      </Link>
    </MovieCard>
  );
}

MovieGalCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  original_name: PropTypes.string,
  release_date: PropTypes.string,
};

export default MovieGalCard;
