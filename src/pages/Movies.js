import fetchSearchMovies from 'API/get_search';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [serachMovies, setSerachMovies] = useState([]);
  const [serachParams, setSerachParams] = useSearchParams();

  const handleSearchSubmit = async e => {
    e.preventDefault();
    const searchMovie = serachParams.get('query');
    const { results } = await fetchSearchMovies(searchMovie);
    setSerachMovies([...results]);
  };

  return (
    <>
      <div>
        компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
      </div>
      <p></p>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          onChange={e => setSerachParams({ query: e.target.value })}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {serachMovies.map(name => (
          <li key={name.id}>
            <Link key={name.id} to={`${name.id}`}>
              {name.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
