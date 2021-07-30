import PropTypes from 'prop-types';
import { MovieGall } from './MovieList.styled';
import MovieGalCard from '../MovieGalCard/MovieGalCard';
import Container from '../Container/Container'

function MovieList({ movies }) {
  return (
    <Container>
      <MovieGall>
      {movies.map(({ id, title, original_name, poster_path, release_date, vote_average }) => {
        return (
          <MovieGalCard
            key={id}
            id={id}
            title={title}
            original_name={original_name}
            poster_path={poster_path}
            release_date={release_date}
            vote_average = {vote_average}
          />
        );
      })}
    </MovieGall>
    </Container>
  );
}

MovieList.propTypes={
  movies: PropTypes.array,
}

export default MovieList;
