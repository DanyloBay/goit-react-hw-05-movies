import fetchSearchMovies from 'API/get_search';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';

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
      <ul>
        {serachMovies.map(name => (
          <li key={name.id}>
            <Link key={name.id} to={`${name.id}`} state={{ from: location }}>
              {name.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
