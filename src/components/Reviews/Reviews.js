import fetchMovie from 'API/get_movie_api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'utils/Container/Container';

import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviwes] = useState([]);
  const { moviedId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { results },
        } = await fetchMovie(`/movie/${moviedId}/reviews`);
        setReviwes(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [moviedId]);

  return (
    <Container>
      {reviews.length > 0 ? (
        <ul className={css.reviewList}>
          {reviews.map(review => (
            <li key={review.id} className={css.reviewItem}>
              <span className={css.commentOwner}>Author: </span>
              {review.author}
              <p className={css.reviewDesc}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.reviewDesc}>
          Unfortunately, we could not find any reviews for this movie
        </p>
      )}
    </Container>
  );
};
export default Reviews;
