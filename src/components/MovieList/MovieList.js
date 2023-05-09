import css from './MovieList.module.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const MovieList = ({ movies, location }) => {
  return (
    <ul className={css.mainList}>
      {movies.map(movie => (
        <li className={css.mainItems} key={movie.id}>
          <Link
            className={css.mainLink}
            key={movie.id}
            to={`${movie.id}`}
            state={{ from: location }}
          >
            <div className={css.mainLinkItem}>
              <img
                width={300}
                height={400}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : logo
                }
                alt={movie.original_title}
              />
              {movie.original_title}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
