import { useRouteMatch, NavLink } from 'react-router-dom';
import {
  MovieWrap,
  Image,
  MovieDesc,
  MovieTitle,
  Info,
  InfoName,
  BtnWrap,
} from './MovieInfo.styled';

function MovieInfo({ movie, genres }) {
  const { url } = useRouteMatch();
  return (
    <MovieWrap>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
      />
      <MovieDesc>
        <MovieTitle>{movie.original_title}</MovieTitle>
        <Info>
          <InfoName>Reliase year:</InfoName> {parseInt(movie.release_date)}
        </Info>
        <Info>
          <InfoName>Votes:</InfoName> {movie.vote_average}
        </Info>
        <Info>
          <InfoName>Popularity:</InfoName> {movie.popularity}
        </Info>
        <Info>
          <InfoName>Genres:</InfoName> {genres.join(', ')}
        </Info>
        <Info>
          <InfoName>Owerview:</InfoName>
        </Info>
        <Info>{movie.overview}</Info>
        <BtnWrap>
          <NavLink
            to={`${url}/cast`}
            className='NavLink'
            activeClassName='ActiveLink'
          >
            Cast
          </NavLink>
          <NavLink
            to={`${url}/reviews`}
            className='NavLink'
            activeClassName='ActiveLink'
          >
            Reviews
          </NavLink>
        </BtnWrap>
      </MovieDesc>
    </MovieWrap>
  );
}

export default MovieInfo;
