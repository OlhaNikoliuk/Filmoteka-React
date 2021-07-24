import PropTypes from 'prop-types';
import { Reviews, Author, ReviewText } from './MovieReviews.styled';

function MovieRewiews({ reviews }) {
  return reviews.map((review) => {
    return (
      <Reviews key={review.id}>
        <Author>{review.author}</Author>
        <ReviewText>{review.content}</ReviewText>
      </Reviews>
    );
  });
}

MovieRewiews.propTypes={
  review: PropTypes.array,
}

export default MovieRewiews;
