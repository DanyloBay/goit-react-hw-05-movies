import fetchGetMovieReviews from 'API/get_movie_reviews';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import css from './Reviews.module.css';

const Reviews = () => {
  const { moviedId } = useParams();
  useEffect(() => {
    fetchGetMovieReviews(moviedId)
      .then(({ results }) => console.log(results))
      .catch(error => console.log(error));
  }, [moviedId]);
  return (
    <div>
      компонент Reviews, інформація про огляди. Рендериться на сторінці
      MovieDetails.
    </div>
  );
};

export default Reviews;
