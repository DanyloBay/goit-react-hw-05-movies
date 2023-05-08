import fetchGetMovie from 'API/get_movie_details';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { moviedId } = useParams();

  useEffect(() => {
    fetchGetMovie(moviedId)
      .then(data => setMovie(data))
      .catch(error => console.log(error));
  }, [moviedId]);

  console.log(movie);
  return (
    <>
      <div>Картка з описом фільму {moviedId}</div>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
