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

export default MovieRewiews;
