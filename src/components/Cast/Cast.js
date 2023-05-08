import fetchGetMovieCredits from 'API/get_movie_credits';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import css from './Cast.module.css';

const Cast = () => {
  // const [cats, setCast] = useState();
  const { moviedId } = useParams();
  useEffect(() => {
    fetchGetMovieCredits(moviedId)
      .then(({ cast }) => console.log(cast))
      .catch(error => console.log(error));
  }, [moviedId]);

  return <div></div>;
};

export default Cast;
