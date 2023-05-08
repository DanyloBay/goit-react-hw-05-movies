import fetchTrendingMovies from 'API/get_trending';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className={css.mainTitle}>Movie Trends For Day</h1>
      <ul className={css.mainList}>
        {movies.map(movie => (
          <li key={movie.id}>
            {/* <img href={movie.poster_path} alt={movie.original_title} /> */}
            <Link
              className={css.mainItems}
              key={movie.id}
              to={`movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
