import fetchGetMovieCredits from 'API/get_movie_credits';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import { Container } from 'utils/Container/Container';

import logo from '../../images/logo.png';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { moviedId } = useParams();
  useEffect(() => {
    fetchGetMovieCredits(moviedId)
      .then(({ cast }) => setCast([...cast]))
      .catch(error => console.log(error));
  }, [moviedId]);

  return (
    <Container>
      <ul className={css.castList}>
        {cast.map(actor => (
          <li key={actor.id} className={css.castListItem}>
            <img
              width={150}
              height={200}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : logo
              }
              alt={actor.name}
            />
            <p className={css.castNames}>{actor.name}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Cast;
