import { useRouteMatch, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MovieWrap,
  Image,
  MovieDesc,
  MovieTitle,
  Info,
  InfoName,
  BtnWrap,
} from './MovieInfo.styled';

function MovieInfo({
  poster_path,
  original_title,
  release_date,
  vote_average,
  popularity,
  genres,
  overview,
}) {
  const { url } = useRouteMatch();

  return (
    <MovieWrap>
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
      />
      <MovieDesc>
        <MovieTitle>{original_title}</MovieTitle>
        <Info>
          <InfoName>Reliase year:</InfoName> {parseInt(release_date)}
        </Info>
        <Info>
          <InfoName>Votes:</InfoName> {vote_average}
        </Info>
        <Info>
          <InfoName>Popularity:</InfoName> {popularity}
        </Info>
        <Info>
          <InfoName>Genres:</InfoName> {genres.join(', ')}
        </Info>
        <Info>
          <InfoName>Owerview:</InfoName>
        </Info>
        <Info>{overview}</Info>
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

MovieInfo.propTypes = {
  poster_path: PropTypes.string,
  original_title:PropTypes.string,
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
  popularity: PropTypes.number,
  genres: PropTypes.array,
  overview: PropTypes.string,
};

export default MovieInfo;
