import fetchSearchMovies from 'API/get_search';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';
import logo from '../images/logo.png';

const Movies = () => {
  const [serachMovies, setSerachMovies] = useState([]);
  const [serachParams, setSerachParams] = useSearchParams();
  const location = useLocation();

  const handleSearchSubmit = async e => {
    e.preventDefault();
    const searchMovie = serachParams.get('query');
    const { results } = await fetchSearchMovies(searchMovie);
    setSerachMovies([...results]);
  };

  return (
    <>
      <form className={css.movieSearchForm} onSubmit={handleSearchSubmit}>
        <input
          className={css.movieSearchInput}
          type="text"
          onChange={e => setSerachParams({ query: e.target.value })}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      <ul className={css.movieList}>
        {serachMovies.map(name => (
          <li className={css.movieItems} key={name.id}>
            <Link
              className={css.movieLink}
              key={name.id}
              to={`${name.id}`}
              state={{ from: location }}
            >
              <div className={css.movieLinkItem}>
                <img
                  width={300}
                  height={400}
                  src={
                    name.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${name.poster_path}`
                      : logo
                  }
                  alt={name.original_title}
                />
                {name.original_title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
