import { MovieGall } from './MovieList.styled';
import MovieGalCard from '../MovieGalCard/MovieGalCard';
import Container from '../Container/Container'

function MovieList({ movies }) {
  return (
    <Container>
      <MovieGall>
      {movies.map(({ id, title, original_name, poster_path }) => {
        return (
          <MovieGalCard
            key={id}
            id={id}
            title={title}
            original_name={original_name}
            poster_path={poster_path}
          />
        );
      })}
    </MovieGall>
    </Container>
  );
}

export default MovieList;
